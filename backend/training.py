import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

df = pd.read_csv("C:\\Users\\edmoc\\Downloads\\laptop_prices.csv", encoding='latin-1')
EURO_TO_CAD = 1.55
df['Price'] = df['Price_euros'].apply(lambda p : round(p * EURO_TO_CAD, 2))
df = df.drop(columns=['laptop_ID', 'Price_euros'])
df = df.rename(columns={'Cpu' : 'CPU', 'Gpu' : 'GPU', 'OpSys' : 'OS', 'Inches' : 'ScreenSize', 'Ram' : 'RAM', 'ScreenResolution' : 'Resolution'})
df['Weight'] = df["Weight"].str.replace("kg", "").astype(float)
df['RAM'] = df["RAM"].str.replace("GB", "").astype(float)
df = df.drop_duplicates()
df = df[df['OS'] != 'No OS']

X = df.drop(columns=["Price"]) 
y = df["Price"]

categorical_cols = X.select_dtypes(include=["object"]).columns.tolist()
numerical_cols = X.select_dtypes(include=["float64"]).columns.tolist()

encoder = OneHotEncoder(handle_unknown="ignore")

preprocessor = ColumnTransformer(
    transformers=[
        ('categorical', encoder, categorical_cols),
        ('numerical', 'passthrough', numerical_cols)
    ])

model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('model', RandomForestRegressor())
])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model.fit(X_train, y_train)

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)