def get_chart_data(df):

    sales_by_category = (
        df.groupby("Category")["Sales"]
        .sum()
        .round(2)
        .reset_index()
        .to_dict(orient="records")
    )

    return {
        "salesByCategory": sales_by_category
    }