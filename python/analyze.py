import json
import pandas as pd
from pathlib import Path

from services.kpi_service import calculate_kpis
from services.chart_service import get_chart_data
from services.insight_service import generate_insights

BASE_DIR = Path(__file__).resolve().parent.parent
DATASET_PATH = BASE_DIR / "dataset" / "SampleSuperstore.csv"

df = pd.read_csv(DATASET_PATH)

response = {
    "success": True,
    "data": {
        "kpis": calculate_kpis(df),
        "charts": get_chart_data(df),
        "insights": generate_insights(df)
    }
}
print(json.dumps(response, indent=4))