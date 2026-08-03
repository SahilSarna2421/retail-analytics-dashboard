export interface ChartItem {
    label: string;
    value: number;
}

export interface DashboardData {
    kpis: {
        totalSales: number;
        totalProfit: number;
        totalQuantity: number;
        averageDiscount: number;
        numberOfStates: number;
    };

    charts: {
        salesByCategory: ChartItem[];
        profitByCategory: ChartItem[];
        salesByRegion: ChartItem[];
        profitByRegion: ChartItem[];
        salesBySegment: ChartItem[];
        topStates: ChartItem[];
        profitMarginByCategory: ChartItem[];
    };

    insights: string[];
}

export interface ApiResponse {
    success: boolean;
    data: DashboardData;
}