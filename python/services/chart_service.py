import pandas as pd

def get_chart_data(df):

    sales_by_category_df = (
        df.groupby("Category")["Sales"]
        .sum()
        .round(2)
        .reset_index()
    )

    sales_by_category = [
        {
            "label": row["Category"],
            "value": row["Sales"]
        }
        for _, row in sales_by_category_df.iterrows()
    ]

    profit_by_category_df = (
        df.groupby("Category")["Profit"]
        .sum()
        .round(2)
        .reset_index()
    )

    profit_by_category = [
        {
            "label": row["Category"],
            "value": row["Profit"]
        }
        for _, row in profit_by_category_df.iterrows()
    ]

    profit_margin_df = (
        df.groupby("Category")[["Sales", "Profit"]]
        .sum()
        .reset_index()
    )

    profit_margin = [
        {
            "label": row["Category"],
            "value": round((row["Profit"] / row["Sales"]) * 100, 2)
        }
        for _, row in profit_margin_df.iterrows()
    ]

    sales_by_region_df = (
        df.groupby("Region")["Sales"]
        .sum()
        .round(2)
        .reset_index()
    )

    sales_by_region = [
        {
            "label": row["Region"],
            "value": row["Sales"]
        }
        for _, row in sales_by_region_df.iterrows()
    ]

    profit_by_region_df = (
        df.groupby("Region")["Profit"]
        .sum()
        .round(2)
        .reset_index()
    )

    profit_by_region = [
        {
            "label": row["Region"],
            "value": row["Profit"]
        }
        for _, row in profit_by_region_df.iterrows()
    ]

    sales_by_segment_df = (
        df.groupby("Segment")["Sales"]
        .sum()
        .round(2)
        .reset_index()
    )

    sales_by_segment = [
        {
            "label": row["Segment"],
            "value": row["Sales"]
        }
        for _, row in sales_by_segment_df.iterrows()
    ]

    top_states_df = (
        df.groupby("State")["Sales"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
        .round(2)
        .reset_index()
    )

    top_states = [
        {
            "label": row["State"],
            "value": row["Sales"]
        }
        for _, row in top_states_df.iterrows()
    ]

    



    return {
        "salesByCategory": sales_by_category,
        "profitByCategory": profit_by_category,
        "salesByRegion": sales_by_region,
        "profitByRegion": profit_by_region,
        "salesBySegment": sales_by_segment,
        "topStates": top_states,
        "profitMarginByCategory": profit_margin
    }