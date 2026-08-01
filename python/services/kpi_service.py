def calculate_kpis(df):
    return {
        "totalSales": round(df["Sales"].sum(), 2),
        "totalProfit": round(df["Profit"].sum(), 2),
        "totalQuantity": int(df["Quantity"].sum()),
        "averageDiscount": round(df["Discount"].mean(), 2),
        "numberOfStates": int(df["State"].nunique())
    }