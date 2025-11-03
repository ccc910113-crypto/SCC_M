// ==================== 全域變數 ====================
// 斷路器動作特性試驗數據分析 - 新數據結構（包含測量值1和測量值2）
const circuitBreakerData = {
    // 根據新的CSV數據結構重新組織
    "量測數據": [
        // 20240304A 儀器數據
        {量測者: "涂X騰", 儀器編號: "20240304A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 99.9, 測量值2: 96.1}, 開啟: {測量值1: 28.7, 測量值2: 29.2}},
        {量測者: "余O濤", 儀器編號: "20240304A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 93.5, 測量值2: 99.3}, 開啟: {測量值1: 28.8, 測量值2: 30.8}},
        {量測者: "洪O祥", 儀器編號: "20240304A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 99.4, 測量值2: 96.6}, 開啟: {測量值1: 29.2, 測量值2: 31.2}},
        {量測者: "游X潔", 儀器編號: "20240304A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 97.4, 測量值2: 98.0}, 開啟: {測量值1: 29.5, 測量值2: 31.2}},
        {量測者: "涂X騰", 儀器編號: "20240304B", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 97.5, 測量值2: 99.5}, 開啟: {測量值1: 28.1, 測量值2: 30.1}},
        {量測者: "余O濤", 儀器編號: "20240304B", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 95.9, 測量值2: 99.6}, 開啟: {測量值1: 29.6, 測量值2: 28.9}},
        {量測者: "洪O祥", 儀器編號: "20240304B", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 96.0, 測量值2: 97.4}, 開啟: {測量值1: 27.6, 測量值2: 26.6}},
        {量測者: "游X潔", 儀器編號: "20240304B", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 96.4, 測量值2: 96.0}, 開啟: {測量值1: 30.4, 測量值2: 29.3}},
        {量測者: "涂X騰", 儀器編號: "20240304C", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 97.3, 測量值2: 97.4}, 開啟: {測量值1: 31.0, 測量值2: 28.9}},
        {量測者: "余O濤", 儀器編號: "20240304C", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 95.8, 測量值2: 98.3}, 開啟: {測量值1: 28.9, 測量值2: 29.3}},
        {量測者: "洪O祥", 儀器編號: "20240304C", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 99.9, 測量值2: 97.2}, 開啟: {測量值1: 27.2, 測量值2: 29.3}},
        {量測者: "游X潔", 儀器編號: "20240304C", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 98.5, 測量值2: 97.4}, 開啟: {測量值1: 30.3, 測量值2: 29.3}},
        {量測者: "涂X騰", 儀器編號: "20250224A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 99.9, 測量值2: 97.0}, 開啟: {測量值1: 30.4, 測量值2: 31.5}},
        {量測者: "余O濤", 儀器編號: "20250224A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 92.4, 測量值2: 98.4}, 開啟: {測量值1: 26.6, 測量值2: 28.6}},
        {量測者: "洪O祥", 儀器編號: "20250224A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 98.7, 測量值2: 97.5}, 開啟: {測量值1: 27.1, 測量值2: 29.0}},
        {量測者: "游X潔", 儀器編號: "20250224A", 量測手法: "A", 組裝廠別: "精裝A", 閉合: {測量值1: 95.0, 測量值2: 96.7}, 開啟: {測量值1: 30.0, 測量值2: 30.0}},
        {量測者: "涂X騰", 儀器編號: "20240304A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 96.8, 測量值2: 96.5}, 開啟: {測量值1: 29.2, 測量值2: 29.7}},
        {量測者: "余O濤", 儀器編號: "20240304A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.3, 測量值2: 98.4}, 開啟: {測量值1: 28.6, 測量值2: 28.8}},
        {量測者: "洪O祥", 儀器編號: "20240304A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.7, 測量值2: 97.2}, 開啟: {測量值1: 29.3, 測量值2: 29.9}},
        {量測者: "游X潔", 儀器編號: "20240304A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.0, 測量值2: 97.5}, 開啟: {測量值1: 30.1, 測量值2: 30.4}},
        {量測者: "涂X騰", 儀器編號: "20240304B", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.6, 測量值2: 97.5}, 開啟: {測量值1: 28.2, 測量值2: 28.5}},
        {量測者: "余O濤", 儀器編號: "20240304B", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 95.9, 測量值2: 95.7}, 開啟: {測量值1: 29.7, 測量值2: 29.9}},
        {量測者: "洪O祥", 儀器編號: "20240304B", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 95.6, 測量值2: 95.4}, 開啟: {測量值1: 28.9, 測量值2: 29.4}},
        {量測者: "游X潔", 儀器編號: "20240304B", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 96.3, 測量值2: 96.5}, 開啟: {測量值1: 29.5, 測量值2: 29.7}},
        {量測者: "涂X騰", 儀器編號: "20240304C", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.9, 測量值2: 98.1}, 開啟: {測量值1: 28.7, 測量值2: 28.9}},
        {量測者: "余O濤", 儀器編號: "20240304C", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.5, 測量值2: 97.5}, 開啟: {測量值1: 29.6, 測量值2: 30.2}},
        {量測者: "洪O祥", 儀器編號: "20240304C", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.4, 測量值2: 97.2}, 開啟: {測量值1: 29.9, 測量值2: 29.8}},
        {量測者: "游X潔", 儀器編號: "20240304C", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.8, 測量值2: 98.5}, 開啟: {測量值1: 29.3, 測量值2: 29.2}},
        {量測者: "涂X騰", 儀器編號: "20250224A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.4, 測量值2: 98.5}, 開啟: {測量值1: 29.2, 測量值2: 29.4}},
        {量測者: "余O濤", 儀器編號: "20250224A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.4, 測量值2: 97.3}, 開啟: {測量值1: 29.2, 測量值2: 29.0}},
        {量測者: "洪O祥", 儀器編號: "20250224A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 97.3, 測量值2: 97.2}, 開啟: {測量值1: 29.7, 測量值2: 29.8}},
        {量測者: "游X潔", 儀器編號: "20250224A", 量測手法: "B", 組裝廠別: "精裝A", 閉合: {測量值1: 98.5, 測量值2: 98.4}, 開啟: {測量值1: 29.3, 測量值2: 29.5}},
        {量測者: "涂X騰", 儀器編號: "20240304A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 95.8, 測量值2: 95.5}, 開啟: {測量值1: 29.8, 測量值2: 29.9}},
        {量測者: "余O濤", 儀器編號: "20240304A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 96.9, 測量值2: 97.1}, 開啟: {測量值1: 29.5, 測量值2: 29.4}},
        {量測者: "洪O祥", 儀器編號: "20240304A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 96.7, 測量值2: 97.1}, 開啟: {測量值1: 30.4, 測量值2: 30.3}},
        {量測者: "游X潔", 儀器編號: "20240304A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 96.7, 測量值2: 96.0}, 開啟: {測量值1: 29.4, 測量值2: 29.8}},
        {量測者: "涂X騰", 儀器編號: "20240304B", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 96.7, 測量值2: 96.8}, 開啟: {測量值1: 28.8, 測量值2: 28.9}},
        {量測者: "余O濤", 儀器編號: "20240304B", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.7, 測量值2: 97.8}, 開啟: {測量值1: 29.3, 測量值2: 29.4}},
        {量測者: "洪O祥", 儀器編號: "20240304B", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 93.7, 測量值2: 94.6}, 開啟: {測量值1: 29.2, 測量值2: 29.1}},
        {量測者: "游X潔", 儀器編號: "20240304B", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 96.5, 測量值2: 96.9}, 開啟: {測量值1: 29.6, 測量值2: 29.8}},
        {量測者: "涂X騰", 儀器編號: "20240304C", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 94.0, 測量值2: 94.7}, 開啟: {測量值1: 29.5, 測量值2: 29.1}},
        {量測者: "余O濤", 儀器編號: "20240304C", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.5, 測量值2: 97.2}, 開啟: {測量值1: 29.7, 測量值2: 29.5}},
        {量測者: "洪O祥", 儀器編號: "20240304C", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.4, 測量值2: 96.8}, 開啟: {測量值1: 29.3, 測量值2: 29.4}},
        {量測者: "游X潔", 儀器編號: "20240304C", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.6, 測量值2: 97.5}, 開啟: {測量值1: 28.0, 測量值2: 28.2}},
        {量測者: "涂X騰", 儀器編號: "20250224A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.5, 測量值2: 97.6}, 開啟: {測量值1: 28.0, 測量值2: 28.1}},
        {量測者: "余O濤", 儀器編號: "20250224A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 95.5, 測量值2: 95.0}, 開啟: {測量值1: 28.5, 測量值2: 28.3}},
        {量測者: "洪O祥", 儀器編號: "20250224A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.3, 測量值2: 97.8}, 開啟: {測量值1: 28.9, 測量值2: 29.1}},
        {量測者: "游X潔", 儀器編號: "20250224A", 量測手法: "C", 組裝廠別: "精裝A", 閉合: {測量值1: 97.2, 測量值2: 97.5}, 開啟: {測量值1: 30.4, 測量值2: 30.1}},
        {量測者: "涂X騰", 儀器編號: "20240304A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.0, 測量值2: 96.6}, 開啟: {測量值1: 31.2, 測量值2: 30.9}},
        {量測者: "余O濤", 儀器編號: "20240304A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.4, 測量值2: 96.1}, 開啟: {測量值1: 29.7, 測量值2: 29.9}},
        {量測者: "洪O祥", 儀器編號: "20240304A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.3, 測量值2: 96.8}, 開啟: {測量值1: 29.2, 測量值2: 29.6}},
        {量測者: "游X潔", 儀器編號: "20240304A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 94.3, 測量值2: 95.7}, 開啟: {測量值1: 30.6, 測量值2: 30.4}},
        {量測者: "涂X騰", 儀器編號: "20240304B", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 95.3, 測量值2: 95.9}, 開啟: {測量值1: 30.3, 測量值2: 30.6}},
        {量測者: "余O濤", 儀器編號: "20240304B", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 97.3, 測量值2: 97.0}, 開啟: {測量值1: 29.7, 測量值2: 29.8}},
        {量測者: "洪O祥", 儀器編號: "20240304B", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.1, 測量值2: 96.6}, 開啟: {測量值1: 30.4, 測量值2: 30.0}},
        {量測者: "游X潔", 儀器編號: "20240304B", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.4, 測量值2: 96.9}, 開啟: {測量值1: 30.9, 測量值2: 31.0}},
        {量測者: "涂X騰", 儀器編號: "20240304C", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.6, 測量值2: 96.1}, 開啟: {測量值1: 29.6, 測量值2: 30.1}},
        {量測者: "余O濤", 儀器編號: "20240304C", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 95.4, 測量值2: 95.9}, 開啟: {測量值1: 29.5, 測量值2: 29.6}},
        {量測者: "洪O祥", 儀器編號: "20240304C", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.2, 測量值2: 96.8}, 開啟: {測量值1: 30.9, 測量值2: 30.6}},
        {量測者: "游X潔", 儀器編號: "20240304C", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.9, 測量值2: 96.8}, 開啟: {測量值1: 29.2, 測量值2: 29.0}},
        {量測者: "涂X騰", 儀器編號: "20250224A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.0, 測量值2: 96.1}, 開啟: {測量值1: 30.3, 測量值2: 30.3}},
        {量測者: "余O濤", 儀器編號: "20250224A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.9, 測量值2: 96.2}, 開啟: {測量值1: 29.7, 測量值2: 29.8}},
        {量測者: "洪O祥", 儀器編號: "20250224A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.1, 測量值2: 96.5}, 開啟: {測量值1: 30.4, 測量值2: 30.5}},
        {量測者: "游X潔", 儀器編號: "20250224A", 量測手法: "D", 組裝廠別: "精裝A", 閉合: {測量值1: 96.7, 測量值2: 95.8}, 開啟: {測量值1: 30.7, 測量值2: 30.8}}
    ]
};

// 標準值設定 - 斷路器動作特性試驗標準 (更新後)
const specLimits = {
    "閉合": {
        "下限值": 85,
        "標準值下限": 93,
        "標準值上限": 99,
        "上限值": 120
    },
    "開啟": {
        "下限值": 26,
        "標準值下限": 28,
        "標準值上限": 31,
        "上限值": 33
    }
};

// 計算統計數據的函數
function calculateStats(data) {
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (data.length - 1);
    const stdDev = Math.sqrt(variance);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    return { mean, stdDev, min, max, range, n: data.length };
}

// 檢測異常值並診斷原因的函數
function detectOutliersWithDiagnosis(data, mean, stdDev, usl, lsl) {
    const threshold = 3; // 3σ原則
    const outliers = [];
    
    data.forEach(val => {
        if (Math.abs(val - mean) > threshold * stdDev || (usl && val > usl) || (lsl && val < lsl)) {
            let diagnosis = '';
            let severity = 'warning';
            
            // 狀況1：動作時間超出標準範圍
            if (usl && val > usl) {
                diagnosis = '動作時間過長';
                severity = 'critical';
            }
            else if (lsl && val < lsl) {
                diagnosis = '動作時間過短';
                severity = 'critical';
            }
            // 狀況2：三相相差時間異常
            else if (Math.abs(val - mean) > stdDev * 2) {
                diagnosis = '三相不平衡';
                severity = 'warning';
            }
            // 狀況3：速度異常
            else if (Math.abs(val - mean) > stdDev * 1.5) {
                diagnosis = '速度異常';
                severity = 'caution';
            }
            
            outliers.push({
                value: val,
                diagnosis: diagnosis,
                severity: severity,
                deviation: ((val - mean) / mean * 100).toFixed(1)
            });
        }
    });
    
    return outliers;
}

// 生成SPC數據結構 - 更新為新數據格式
const spcData = {};
const phaseBreakdown = {};

// 處理新的數據結構
const measurementData = circuitBreakerData["量測數據"];

// 按儀器編號和量測者分組處理數據，並按照A、B、C、D順序排列
const groupedByInstrumentAndMeasurer = {};
measurementData.forEach(record => {
    const instrument = record.儀器編號;
    const measurer = record.量測者;
    const method = record.量測手法;
    const key = `${instrument}-${measurer}`;
    
    if (!groupedByInstrumentAndMeasurer[key]) {
        groupedByInstrumentAndMeasurer[key] = {
            儀器編號: instrument,
            量測者: measurer,
            閉合: {測量值1: [], 測量值2: []},
            開啟: {測量值1: [], 測量值2: []},
            測量手法順序: [] // 記錄測量手法的順序
        };
    }
    
    // 記錄測量手法順序
    groupedByInstrumentAndMeasurer[key].測量手法順序.push(method);
    
    // 添加閉合和開啟數據（測量值1和測量值2）
    if (record.閉合 && record.閉合.測量值1 !== null && record.閉合.測量值1 !== undefined) {
        groupedByInstrumentAndMeasurer[key].閉合.測量值1.push(record.閉合.測量值1);
    }
    if (record.閉合 && record.閉合.測量值2 !== null && record.閉合.測量值2 !== undefined) {
        groupedByInstrumentAndMeasurer[key].閉合.測量值2.push(record.閉合.測量值2);
    }
    if (record.開啟 && record.開啟.測量值1 !== null && record.開啟.測量值1 !== undefined) {
        groupedByInstrumentAndMeasurer[key].開啟.測量值1.push(record.開啟.測量值1);
    }
    if (record.開啟 && record.開啟.測量值2 !== null && record.開啟.測量值2 !== undefined) {
        groupedByInstrumentAndMeasurer[key].開啟.測量值2.push(record.開啟.測量值2);
    }
});

// 為每個儀器-量測者組合和測量項目生成統計數據
Object.keys(groupedByInstrumentAndMeasurer).forEach(key => {
    const data = groupedByInstrumentAndMeasurer[key];
    const instrument = data.儀器編號;
    const measurer = data.量測者;
    
    // 處理閉合數據 - 測量值1
    const closeStats = calculateStats(data.閉合.測量值1);
    const closeLimits = specLimits["閉合"];
    const closeOutliers = detectOutliersWithDiagnosis(data.閉合.測量值1, closeStats.mean, closeStats.stdDev, closeLimits.上限值, closeLimits.下限值);
    
    const closeUcl = closeStats.mean + 3 * closeStats.stdDev;
    const closeLcl = Math.max(0, closeStats.mean - 3 * closeStats.stdDev);
    const closeCpu = (closeLimits.上限值 - closeStats.mean) / (3 * closeStats.stdDev);
    const closeCpl = (closeStats.mean - closeLimits.下限值) / (3 * closeStats.stdDev);
    const closeCpk = Math.min(closeCpu, closeCpl);
    
    // 處理閉合數據 - 測量值1
    const closeKey1 = `${instrument}-${measurer}-閉合-測量值1`;
    spcData[closeKey1] = {
        n: closeStats.n,
        mean: closeStats.mean,
        stdDev: closeStats.stdDev,
        range: closeStats.range,
        usl: closeLimits.上限值,
        lsl: closeLimits.下限值,
        ucl: closeUcl,
        lcl: closeLcl,
        outliers: closeOutliers.length,
        cpu: closeCpu,
        cpk: closeCpk,
        singleSided: false,
        measurements: data.閉合.測量值1
    };
    
    phaseBreakdown[closeKey1] = {
        project: instrument,
        operation: "閉合",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "測量值1",
        n: closeStats.n,
        mean: closeStats.mean,
        stdDev: closeStats.stdDev,
        range: closeStats.range,
        min: closeStats.min,
        max: closeStats.max,
        usl: closeLimits.上限值,
        lsl: closeLimits.下限值,
        ucl: closeUcl,
        lcl: closeLcl,
        outliers: closeOutliers.length,
        outliersValues: closeOutliers.map(o => o.value),
        outliersDiagnosis: closeOutliers,
        cpu: closeCpu,
        cpl: closeCpl,
        cpk: closeCpk,
        singleSided: false,
        measurements: data.閉合.測量值1
    };
    
    // 處理閉合數據 - 測量值2
    const closeStats2 = calculateStats(data.閉合.測量值2);
    const closeOutliers2 = detectOutliersWithDiagnosis(data.閉合.測量值2, closeStats2.mean, closeStats2.stdDev, closeLimits.上限值, closeLimits.下限值);
    
    const closeUcl2 = closeStats2.mean + 3 * closeStats2.stdDev;
    const closeLcl2 = Math.max(0, closeStats2.mean - 3 * closeStats2.stdDev);
    const closeCpu2 = (closeLimits.上限值 - closeStats2.mean) / (3 * closeStats2.stdDev);
    const closeCpl2 = (closeStats2.mean - closeLimits.下限值) / (3 * closeStats2.stdDev);
    const closeCpk2 = Math.min(closeCpu2, closeCpl2);
    
    const closeKey2 = `${instrument}-${measurer}-閉合-測量值2`;
    spcData[closeKey2] = {
        n: closeStats2.n,
        mean: closeStats2.mean,
        stdDev: closeStats2.stdDev,
        range: closeStats2.range,
        usl: closeLimits.上限值,
        lsl: closeLimits.下限值,
        ucl: closeUcl2,
        lcl: closeLcl2,
        outliers: closeOutliers2.length,
        cpu: closeCpu2,
        cpk: closeCpk2,
        singleSided: false,
        measurements: data.閉合.測量值2
    };
    
    phaseBreakdown[closeKey2] = {
        project: instrument,
        operation: "閉合",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "測量值2",
        n: closeStats2.n,
        mean: closeStats2.mean,
        stdDev: closeStats2.stdDev,
        range: closeStats2.range,
        min: closeStats2.min,
        max: closeStats2.max,
        usl: closeLimits.上限值,
        lsl: closeLimits.下限值,
        ucl: closeUcl2,
        lcl: closeLcl2,
        outliers: closeOutliers2.length,
        outliersValues: closeOutliers2.map(o => o.value),
        outliersDiagnosis: closeOutliers2,
        cpu: closeCpu2,
        cpl: closeCpl2,
        cpk: closeCpk2,
        singleSided: false,
        measurements: data.閉合.測量值2
    };
    
    // 處理開啟數據 - 測量值1
    const openStats = calculateStats(data.開啟.測量值1);
    const openLimits = specLimits["開啟"];
    const openOutliers = detectOutliersWithDiagnosis(data.開啟.測量值1, openStats.mean, openStats.stdDev, openLimits.上限值, openLimits.下限值);
    
    const openUcl = openStats.mean + 3 * openStats.stdDev;
    const openLcl = Math.max(0, openStats.mean - 3 * openStats.stdDev);
    const openCpu = (openLimits.上限值 - openStats.mean) / (3 * openStats.stdDev);
    const openCpl = (openStats.mean - openLimits.下限值) / (3 * openStats.stdDev);
    const openCpk = Math.min(openCpu, openCpl);
    
    // 處理開啟數據 - 測量值1
    const openKey1 = `${instrument}-${measurer}-開啟-測量值1`;
    spcData[openKey1] = {
        n: openStats.n,
        mean: openStats.mean,
        stdDev: openStats.stdDev,
        range: openStats.range,
        usl: openLimits.上限值,
        lsl: openLimits.下限值,
        ucl: openUcl,
        lcl: openLcl,
        outliers: openOutliers.length,
        cpu: openCpu,
        cpk: openCpk,
        singleSided: false,
        measurements: data.開啟.測量值1
    };
    
    phaseBreakdown[openKey1] = {
        project: instrument,
        operation: "開啟",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "測量值1",
        n: openStats.n,
        mean: openStats.mean,
        stdDev: openStats.stdDev,
        range: openStats.range,
        min: openStats.min,
        max: openStats.max,
        usl: openLimits.上限值,
        lsl: openLimits.下限值,
        ucl: openUcl,
        lcl: openLcl,
        outliers: openOutliers.length,
        outliersValues: openOutliers.map(o => o.value),
        outliersDiagnosis: openOutliers,
        cpu: openCpu,
        cpl: openCpl,
        cpk: openCpk,
        singleSided: false,
        measurements: data.開啟.測量值1
    };
    
    // 處理開啟數據 - 測量值2
    const openStats2 = calculateStats(data.開啟.測量值2);
    const openOutliers2 = detectOutliersWithDiagnosis(data.開啟.測量值2, openStats2.mean, openStats2.stdDev, openLimits.上限值, openLimits.下限值);
    
    const openUcl2 = openStats2.mean + 3 * openStats2.stdDev;
    const openLcl2 = Math.max(0, openStats2.mean - 3 * openStats2.stdDev);
    const openCpu2 = (openLimits.上限值 - openStats2.mean) / (3 * openStats2.stdDev);
    const openCpl2 = (openStats2.mean - openLimits.下限值) / (3 * openStats2.stdDev);
    const openCpk2 = Math.min(openCpu2, openCpl2);
    
    const openKey2 = `${instrument}-${measurer}-開啟-測量值2`;
    spcData[openKey2] = {
        n: openStats2.n,
        mean: openStats2.mean,
        stdDev: openStats2.stdDev,
        range: openStats2.range,
        usl: openLimits.上限值,
        lsl: openLimits.下限值,
        ucl: openUcl2,
        lcl: openLcl2,
        outliers: openOutliers2.length,
        cpu: openCpu2,
        cpk: openCpk2,
        singleSided: false,
        measurements: data.開啟.測量值2
    };
    
    phaseBreakdown[openKey2] = {
        project: instrument,
        operation: "開啟",
        group: measurer,
        methodOrder: data.測量手法順序,
        measurement: "測量值2",
        n: openStats2.n,
        mean: openStats2.mean,
        stdDev: openStats2.stdDev,
        range: openStats2.range,
        min: openStats2.min,
        max: openStats2.max,
        usl: openLimits.上限值,
        lsl: openLimits.下限值,
        ucl: openUcl2,
        lcl: openLcl2,
        outliers: openOutliers2.length,
        outliersValues: openOutliers2.map(o => o.value),
        outliersDiagnosis: openOutliers2,
        cpu: openCpu2,
        cpl: openCpl2,
        cpk: openCpk2,
        singleSided: false,
        measurements: data.開啟.測量值2
    };
});

let currentSection = 'overview';
let selectedProject = '20240304A';
let selectedOperation = '閉合';
let selectedMeasurer = '涂X騰'; // 預設量測者為涂X騰
let selectedMethod = 'A';
let selectedGroupKey = '20240304A-涂X騰-閉合';

// 直方圖變數
let selectedHistogramProject = '20240304A';
let selectedHistogramOperation = '閉合';
let selectedHistogramGroup = '涂X騰';
let selectedHistogramMethod = 'A';

// 散佈圖變數
let selectedScatterProject = '全部';
let selectedScatterOperation = '閉合';
let selectedScatterGroup = '全部';
let selectedScatterMethodX = 'A';
let selectedScatterMethodY = 'B';

const projects = ['20240304A', '20240304B', '20240304C', '20250224A'];
const operations = ['閉合', '開啟'];

let controlChart = null;
let histogramChart = null;
let scatterChart = null;
let paretoChart = null;

// ==================== 全域函數 ====================
function showSection(sectionId) {
    console.log('Switching to section:', sectionId);
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 找到被點擊的按鈕並加上 active 類別
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.onclick && tab.onclick.toString().includes(sectionId)) {
            tab.classList.add('active');
        }
    });
    
    currentSection = sectionId;
    
    setTimeout(() => {
        switch(sectionId) {
            case 'control-charts':
                updateControlChart();
                break;
            case 'histogram':
                updateHistogram();
                break;
            case 'scatter':
                updateScatterPlot();
                break;
            case 'pareto':
                updateParetoChart();
                break;
        }
    }, 200);
}

function selectProject(project) {
    selectedProject = project;
    updateActiveButtons('#projectButtons .control-btn', project);
    initializeControls(); // 重新初始化控制面板以更新可用的量測者選項
    updateControlChart();
}

function selectOperation(operation) {
    selectedOperation = operation;
    updateActiveButtons('#operationButtons .control-btn', operation);
    updateControlChart();
}

function selectMeasurer(measurer) {
    selectedMeasurer = measurer;
    updateActiveButtons('#groupButtons .control-btn', measurer);
    updateControlChart();
}

function selectMethod(method) {
    selectedMethod = method;
    updateActiveButtons('#measurementButtons .control-btn', method);
    updateControlChart();
}

// 直方圖選擇函數
function selectHistogramProject(project) {
    selectedHistogramProject = project;
    updateActiveButtons('#histogramProjectButtons .control-btn', project);
    initializeHistogramControls(); // 重新初始化控制面板以更新可用的量測者選項
    updateHistogram();
}

function selectHistogramOperation(operation) {
    selectedHistogramOperation = operation;
    updateActiveButtons('#histogramOperationButtons .control-btn', operation);
    updateHistogram();
}

function selectHistogramGroup(group) {
    selectedHistogramGroup = group;
    updateActiveButtons('#histogramGroupButtons .control-btn', group);
    updateHistogram();
}

function selectHistogramMethod(method) {
    selectedHistogramMethod = method;
    updateActiveButtons('#histogramMeasurementButtons .control-btn', method);
    updateHistogram();
}

// 散佈圖選擇函數
function selectScatterProject(project) {
    selectedScatterProject = project;
    updateActiveButtons('#scatterProjectButtons .control-btn', project);
    initializeScatterControls(); // 重新初始化控制面板以更新可用的量測者選項
    updateScatterPlot();
}

function selectScatterOperation(operation) {
    selectedScatterOperation = operation;
    updateActiveButtons('#scatterOperationButtons .control-btn', operation);
    updateScatterPlot();
}

function selectScatterGroup(group) {
    selectedScatterGroup = group;
    updateActiveButtons('#scatterGroupButtons .control-btn', group);
    updateScatterPlot();
}

function selectScatterMethodX(method) {
    selectedScatterMethodX = method;
    updateActiveButtons('#scatterXMeasurementButtons .control-btn', method);
    updateScatterPlot();
}

function selectScatterMethodY(method) {
    selectedScatterMethodY = method;
    updateActiveButtons('#scatterYMeasurementButtons .control-btn', method);
    updateScatterPlot();
}

function updateActiveButtons(selector, value) {
    console.log('Updating buttons:', selector, 'with value:', value);
    const buttons = document.querySelectorAll(selector);
    console.log('Found buttons:', buttons.length);
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        const btnValue = btn.dataset.value;
        console.log('Button text:', btnText, 'Button value:', btnValue, 'Target:', value);
        
        if (btnText === value || btnValue === value) {
            btn.classList.add('active');
            console.log('Activated button:', btnText || btnValue);
        }
    });
}

// ==================== 圖表更新函數 ====================
function updateControlChart() {
    console.log('Updating control chart...');
    console.log('Selected Project:', selectedProject);
    console.log('Selected Measurer:', selectedMeasurer);
    console.log('Selected Method:', selectedMethod);
    
    // 從原始數據中篩選符合條件的數據（選定量測者+手法，顯示所有該量測者用該手法測量的儀器）
    const filteredData = circuitBreakerData.量測數據.filter(record => 
        record.量測者 === selectedMeasurer &&
        record.量測手法 === selectedMethod
    ).filter(record => {
        // 如果selectedProject不是"全部"，則進一步篩選
        if (selectedProject === '全部') {
            return true;
        }
        return record.儀器編號 === selectedProject;
    });
    
    if (filteredData.length === 0) {
        console.log('No data found for selected filters');
        return;
    }
    
    // 提取測量值1和測量值2
    const measurement1Data = filteredData.map(record => record[selectedOperation].測量值1);
    const measurement2Data = filteredData.map(record => record[selectedOperation].測量值2);
    
    // 計算統計數據
    const allValues = [...measurement1Data, ...measurement2Data];
    const mean = allValues.reduce((a, b) => a + b, 0) / allValues.length;
    const stdDev = Math.sqrt(allValues.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / allValues.length);
    
    // 獲取規格界限
    const limits = specLimits[selectedOperation];
    
    const titleElement = document.getElementById('controlChartTitle');
    if (titleElement) {
        let title;
        if (selectedProject === '全部') {
            title = `${selectedMeasurer}-${selectedOperation}-手法${selectedMethod} 管制圖`;
        } else {
            title = `${selectedProject}-${selectedMeasurer}-${selectedOperation}-手法${selectedMethod} 管制圖`;
        }
        titleElement.textContent = title;
    }
    
    // 更新規格界限說明
    const specLimitInfoElement = document.getElementById('specLimitInfo');
    if (specLimitInfoElement) {
        const limits = specLimits[selectedOperation];
        if (limits) {
            const stdRange = `${limits.標準值下限}~${limits.標準值上限}ms`;
            const usl = `${limits.上限值}ms`;
            const lsl = `${limits.下限值}ms`;
            specLimitInfoElement.textContent = `綠色實線為標準值 (${stdRange})，紅色虛線為上限值 (${usl})/下限值 (${lsl})。`;
        }
    }
    
    if (controlChart) {
        controlChart.destroy();
        controlChart = null;
    }
    
    const canvas = document.getElementById('controlChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 創建標籤 - 儀器編號
    const labels = filteredData.map(record => record.儀器編號);
    
    // 檢查異常值
    const checkOutlier = (value) => {
        if (!limits) return false;
        return value > limits.上限值 || value < limits.下限值;
    };
    
    // 標註測量值1的點顏色
    const pointColors1 = measurement1Data.map(value => {
        return checkOutlier(value) ? '#ef4444' : '#3182ce';
    });
    
    // 標註測量值2的點顏色
    const pointColors2 = measurement2Data.map(value => {
        return checkOutlier(value) ? '#ef4444' : '#3182ce';
    });
    
    // 計算標準值（規格中間值）
    const standardValue = limits && limits.標準值上限 !== undefined && limits.標準值下限 !== undefined 
        ? (limits.標準值上限 + limits.標準值下限) / 2 
        : mean;
    
    // 計算上限值和下限值
    const upperLimit = limits && limits.上限值 !== undefined ? limits.上限值 : (mean + stdDev * 3);
    const lowerLimit = limits && limits.下限值 !== undefined ? limits.下限值 : (mean - stdDev * 3);
    
    // 計算Y軸範圍，確保包含所有數據點和線條
    const allChartValues = [...measurement1Data, ...measurement2Data, standardValue, upperLimit, lowerLimit];
    const yAxisMin = Math.min(...allChartValues) * 0.9; // 留10%的邊距
    const yAxisMax = Math.max(...allChartValues) * 1.1; // 留10%的邊距
    
    console.log('Control Chart Limits:', {
        limits: limits,
        standardValue: standardValue,
        upperLimit: upperLimit,
        lowerLimit: lowerLimit,
        mean: mean,
        yAxisMin: yAxisMin,
        yAxisMax: yAxisMax
    });
    
    controlChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '測量值1',
                    data: measurement1Data,
                    borderColor: '#3182ce',
                    backgroundColor: pointColors1.map(color => color + '40'),
                    pointBackgroundColor: pointColors1,
                    borderWidth: 2,
                    pointRadius: 5,
                    fill: false
                },
                {
                    label: '測量值2',
                    data: measurement2Data,
                    borderColor: '#3182ce',
                    backgroundColor: pointColors2.map(color => color + '40'),
                    pointBackgroundColor: pointColors2,
                    borderWidth: 2,
                    pointRadius: 5,
                    fill: false
                },
                {
                    label: '標準值',
                    data: new Array(labels.length).fill(standardValue),
                    borderColor: '#10b981',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    tension: 0
                },
                {
                    label: '上限值',
                    data: new Array(labels.length).fill(upperLimit),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    borderDash: [10, 5],
                    tension: 0
                },
                {
                    label: '下限值',
                    data: new Array(labels.length).fill(lowerLimit),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    borderDash: [10, 5],
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            resizeDelay: 200,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1f2937',
                    bodyColor: '#4b5563',
                    borderColor: '#d1d5db',
                    borderWidth: 1,
                    callbacks: {
                        title: function(tooltipItems) {
                            const index = tooltipItems[0].dataIndex;
                            const instrument = filteredData[index].儀器編號;
                            return `${instrument} - 手法${selectedMethod}`;
                        },
                        afterBody: function(tooltipItems) {
                            const value = tooltipItems[0].raw;
                            if (checkOutlier(value)) {
                                if (limits && value > limits.上限值) {
                                return ['', '🚫 超出規格上限'];
                            }
                                if (limits && value < limits.下限值) {
                                return ['', '🚫 超出規格下限'];
                                }
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '測量值',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: {
                        maxTicksLimit: 8,
                        font: { size: 10 }
                    }
                },
                y: {
                    beginAtZero: false,
                    min: Math.floor(yAxisMin),
                    max: Math.ceil(yAxisMax),
                    ticks: {
                        font: { size: 10 }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function updateHistogram() {
    console.log('Updating histogram...');
    
    // 從原始數據中篩選符合條件的數據
    const filteredData = circuitBreakerData.量測數據.filter(record => 
        record.儀器編號 === selectedHistogramProject &&
        record.量測者 === selectedHistogramGroup &&
        record.量測手法 === selectedHistogramMethod
    );
    
    if (filteredData.length === 0) {
        console.log('No data found for selected filters');
        return;
    }
    
    // 提取測量值1和測量值2
    const measurement1Data = filteredData.map(record => record[selectedHistogramOperation].測量值1);
    const measurement2Data = filteredData.map(record => record[selectedHistogramOperation].測量值2);
    const histogramData = [...measurement1Data, ...measurement2Data];
    
    const titleElement = document.getElementById('histogramTitle');
    if (titleElement) {
        const title = `${selectedHistogramProject}-${selectedHistogramGroup}-${selectedHistogramOperation}-手法${selectedHistogramMethod} 分布直方圖`;
        titleElement.textContent = title;
    }
    
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
    }
    
    const canvas = document.getElementById('histogramChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 創建直方圖分箱
    const bins = createHistogramBins(histogramData, 10);
    
    histogramChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bins.map(bin => bin.label),
            datasets: [{
                label: '頻次',
                data: bins.map(bin => bin.count),
                backgroundColor: '#3182ce80',
                borderColor: '#3182ce',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            resizeDelay: 200,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 45,
                        font: { size: 10 }
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 3.0,
                    ticks: {
                        font: { size: 10 },
                        stepSize: 0.5
                    }
                }
            }
        }
    });
}

function updateScatterPlot() {
    console.log('Updating scatter plot...');
    console.log('Selected filters:', {
        project: selectedScatterProject,
        operation: selectedScatterOperation,
        group: selectedScatterGroup,
        methodX: selectedScatterMethodX,
        methodY: selectedScatterMethodY
    });
    
    const titleElement = document.getElementById('scatterTitle');
    if (titleElement) {
        let titleParts = [];
        if (selectedScatterProject !== '全部') titleParts.push(selectedScatterProject);
        if (selectedScatterGroup !== '全部') titleParts.push(selectedScatterGroup);
        titleParts.push(selectedScatterOperation);
        const title = titleParts.join('-') + `-手法${selectedScatterMethodX} vs 手法${selectedScatterMethodY} 散布圖分析`;
        titleElement.textContent = title;
    }
    
    const phaseInfo = document.getElementById('scatterPhaseInfo');
    if (phaseInfo) {
        phaseInfo.textContent = `觀察手法${selectedScatterMethodX}與手法${selectedScatterMethodY}之間測量值的相關性，數據呈現良好一致性，反映測量品質穩定。`;
    }
    
    if (scatterChart) {
        scatterChart.destroy();
        scatterChart = null;
    }
    
    const canvas = document.getElementById('scatterChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 生成散布圖數據
    const dataPoints = [];
    
    // 從原始數據中篩選符合條件的數據（X軸手法）
    const filteredDataX = circuitBreakerData.量測數據.filter(record => {
        // 篩選儀器編號
        if (selectedScatterProject !== '全部' && record.儀器編號 !== selectedScatterProject) {
            return false;
        }
        // 篩選量測者
        if (selectedScatterGroup !== '全部' && record.量測者 !== selectedScatterGroup) {
            return false;
        }
        // 篩選X軸量測手法
        if (record.量測手法 !== selectedScatterMethodX) {
            return false;
        }
        return true;
    });
    
    console.log('Filtered X data:', filteredDataX.length);
    
    // 從原始數據中篩選符合條件的數據（Y軸手法）
    const filteredDataY = circuitBreakerData.量測數據.filter(record => {
        // 篩選儀器編號
        if (selectedScatterProject !== '全部' && record.儀器編號 !== selectedScatterProject) {
            return false;
        }
        // 篩選量測者
        if (selectedScatterGroup !== '全部' && record.量測者 !== selectedScatterGroup) {
            return false;
        }
        // 篩選Y軸量測手法
        if (record.量測手法 !== selectedScatterMethodY) {
            return false;
        }
        return true;
    });
    
    console.log('Filtered Y data:', filteredDataY.length);
    
    if (filteredDataX.length > 0 && filteredDataY.length > 0) {
        // 如果X軸和Y軸選擇不同的手法，只顯示2組組合（測量值1 vs 測量值1，測量值2 vs 測量值2）
        if (selectedScatterMethodX !== selectedScatterMethodY) {
            // 第1組: X軸手法的測量值1 vs Y軸手法的測量值1
            for (let i = 0; i < Math.min(filteredDataX.length, filteredDataY.length); i++) {
                const xRecord = filteredDataX[i];
                const yRecord = filteredDataY[i];
            dataPoints.push({
                    x: xRecord[selectedScatterOperation].測量值1,
                    y: yRecord[selectedScatterOperation].測量值1,
                    project: xRecord.儀器編號,
                    measurer: xRecord.量測者,
                    xMethod: selectedScatterMethodX,
                    yMethod: selectedScatterMethodY,
                    xLabel: '測量值1',
                    yLabel: '測量值1'
                });
            }
            
            // 第2組: X軸手法的測量值2 vs Y軸手法的測量值2
            for (let i = 0; i < Math.min(filteredDataX.length, filteredDataY.length); i++) {
                const xRecord = filteredDataX[i];
                const yRecord = filteredDataY[i];
                dataPoints.push({
                    x: xRecord[selectedScatterOperation].測量值2,
                    y: yRecord[selectedScatterOperation].測量值2,
                    project: xRecord.儀器編號,
                    measurer: xRecord.量測者,
                    xMethod: selectedScatterMethodX,
                    yMethod: selectedScatterMethodY,
                    xLabel: '測量值2',
                    yLabel: '測量值2'
                });
            }
        } else {
            // 如果X軸和Y軸選擇相同的手法，顯示測量值1 vs 測量值2
            for (let i = 0; i < filteredDataX.length; i++) {
                const record = filteredDataX[i];
                dataPoints.push({
                    x: record[selectedScatterOperation].測量值1,
                    y: record[selectedScatterOperation].測量值2,
                    project: record.儀器編號,
                    measurer: record.量測者,
                    xMethod: selectedScatterMethodX,
                    yMethod: selectedScatterMethodX,
                    xLabel: '測量值1',
                    yLabel: '測量值2'
                });
            }
        }
    }
    
    console.log('Generated data points:', dataPoints.length);
    
    // 計算相關係數
    let correlation = 0;
    if (selectedScatterMethodX === selectedScatterMethodY) {
        // 當X軸和Y軸選擇相同手法時，相關性為1（完美相關）
        correlation = 1;
    } else if (dataPoints.length > 1) {
        // 當選擇不同手法時，計算實際相關性
        correlation = calculateCorrelation(dataPoints);
        // 處理NaN或Infinity的情況
        if (!isFinite(correlation)) {
            correlation = 0;
        }
        // 限制相關性在-1到1之間
        correlation = Math.max(-1, Math.min(1, correlation));
    }
    
    // 更新統計資訊
    const correlationElement = document.getElementById('correlationValue');
    if (correlationElement) {
        correlationElement.textContent = correlation.toFixed(2);
    }
    
    // 設置軸範圍
    let xAxisMin, xAxisMax, yAxisMin, yAxisMax, stepSize;
    
    if (selectedScatterOperation === '閉合') {
        // 閉合操作：固定範圍 92-100，差距為1
        xAxisMin = 92;
        xAxisMax = 100;
        yAxisMin = 92;
        yAxisMax = 100;
        stepSize = 1;
    } else {
        // 開啟操作：固定範圍 26-33，差距為1
        xAxisMin = 26;
        xAxisMax = 33;
        yAxisMin = 26;
        yAxisMax = 33;
        stepSize = 1;
    }
    
    // 根據選擇條件決定分組依據
    // 如果選擇了"全部"儀器或"全部"量測者，按該維度分組顯示
    const groupBy = selectedScatterProject === '全部' ? 'project' : 'measurer';
    
    // 按分組維度整理數據
    const groupedData = {};
    dataPoints.forEach(point => {
        const key = groupBy === 'project' ? point.project : point.measurer;
        if (!groupedData[key]) {
            groupedData[key] = [];
        }
        groupedData[key].push(point);
    });
    
    // 創建多個datasets，每個代表一個分組
    const datasets = Object.keys(groupedData).map(key => {
        const color = groupBy === 'project' ? getProjectColor(key) : getMeasurerColor(key);
        return {
            label: key,
            data: groupedData[key],
            backgroundColor: color + '60',
            borderColor: color,
            pointRadius: 4,
            pointHoverRadius: 6
        };
    });
    
    scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1f2937',
                    bodyColor: '#4b5563',
                    borderColor: '#d1d5db',
                    borderWidth: 1,
                    mode: 'nearest',
                    intersect: true,
                    callbacks: {
                        title: function(context) {
                            // 檢查是否有完全重疊的點
                            const currentPoint = dataPoints[context[0].dataIndex];
                            const currentX = context[0].parsed.x;
                            const currentY = context[0].parsed.y;
                            
                            // 找出所有與當前點座標完全相同的點
                            const overlappingPoints = dataPoints.filter((p, idx) => {
                                return Math.abs(p.x - currentX) < 0.001 && Math.abs(p.y - currentY) < 0.001;
                            });
                            
                            // 如果只有一個點，顯示儀器編號和量測者
                            if (overlappingPoints.length === 1) {
                                return `${currentPoint.project} - ${currentPoint.measurer}`;
                            }
                            
                            // 如果有多個完全重疊的點，顯示數量
                            return `${currentPoint.project} - ${currentPoint.measurer} (${overlappingPoints.length}個重疊點)`;
                        },
                        label: function(context) {
                            const currentPoint = dataPoints[context.dataIndex];
                            const currentX = context.parsed.x;
                            const currentY = context.parsed.y;
                            
                            // 找出所有與當前點座標完全相同的點
                            const overlappingPoints = dataPoints.filter((p, idx) => {
                                return Math.abs(p.x - currentX) < 0.001 && Math.abs(p.y - currentY) < 0.001;
                            });
                            
                            // 如果只有一個點，顯示儀器編號、量測者和測量值
                            if (overlappingPoints.length === 1) {
                                const xText = getMeasurementText(currentPoint.xLabel);
                                return `${currentPoint.project} - ${currentPoint.measurer}: X: ${xText} (手法${currentPoint.xMethod}): ${currentX.toFixed(2)}, Y: ${currentPoint.yLabel} (手法${currentPoint.yMethod}): ${currentY.toFixed(2)}`;
                            }
                            
                            // 如果有多個完全重疊的點，按測量值大小排序，若相同則測量值1優先
                            overlappingPoints.sort((a, b) => {
                                // 先按X值排序（數值小的在前）
                                if (Math.abs(a.x - b.x) > 0.001) {
                                    return a.x - b.x;
                                }
                                // X值相同，按Y值排序
                                if (Math.abs(a.y - b.y) > 0.001) {
                                    return a.y - b.y;
                                }
                                // X和Y都相同，優先顯示測量值1
                                const aIsMeasure1 = a.xLabel && a.xLabel.includes('測量值1');
                                const bIsMeasure1 = b.xLabel && b.xLabel.includes('測量值1');
                                if (aIsMeasure1 && !bIsMeasure1) return -1;
                                if (!aIsMeasure1 && bIsMeasure1) return 1;
                                // 都是同類型，按手法排序
                                return a.xMethod.localeCompare(b.xMethod);
                            });
                            
                            // 顯示所有重疊點的測量值信息
                            const labels = [];
                            overlappingPoints.forEach((point, index) => {
                                if (index > 0) labels.push(''); // 添加空行分隔
                                labels.push(`${point.project} - ${point.measurer}: X: ${point.xLabel} (手法${point.xMethod}): ${currentX.toFixed(2)}, Y: ${point.yLabel} (手法${point.yMethod}): ${currentY.toFixed(2)}`);
                            });
                            
                            return labels;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: `手法${selectedScatterMethodX}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: {
                        color: '#f3f4f6'
                    },
                    min: xAxisMin,
                    max: xAxisMax,
                    ticks: {
                        stepSize: stepSize
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: `手法${selectedScatterMethodY}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: {
                        color: '#f3f4f6'
                    },
                    min: yAxisMin,
                    max: yAxisMax,
                    ticks: {
                        stepSize: stepSize
                    }
                }
            }
        }
    });
}

function updateParetoChart() {
    console.log('Updating pareto chart...');
    
    const isDark = document.documentElement.classList.contains('dark');
    const axisTitleColor = isDark ? '#e5e7eb' : '#2d3748';
    
    if (paretoChart) {
        paretoChart.destroy();
        paretoChart = null;
    }
    
    const canvas = document.getElementById('paretoChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 柏拉圖數據 - 基於實際數據分析的品質因素
    const paretoData = [
        { cause: '測量手法標準化', count: 4, percentage: 40.0, reason: '4個手法皆表現良好', detail: '（A、B、C、D）' },
        { cause: '量測者技能一致', count: 4, percentage: 30.0, reason: '4位量測者皆表現良好', detail: '（涂X騰、余O濤、洪O祥、游X潔）' },
        { cause: '儀器編號穩定', count: 4, percentage: 20.0, reason: '4個儀器皆表現良好', detail: '（20240304A、20240304B、20240304C、20250224A）' },
        { cause: '測量環境控制', count: 1, percentage: 7.0, reason: '1個組裝廠別環境控制良好', detail: '（精裝A）' },
        { cause: '其他品質因素', count: 1, percentage: 3.0, reason: '其他細微品質因素控制良好', detail: '' }
    ];
    
    // 計算累積百分比
    let cumulative = 0;
    const cumulativeData = paretoData.map(item => {
        cumulative += item.percentage;
        return cumulative;
    });
    
    paretoChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: paretoData.map(item => `${item.cause}\n${item.reason}`),
            datasets: [
                {
                    type: 'bar',
                    label: '品質貢獻度',
                    data: paretoData.map(item => item.count),
                    backgroundColor: '#38a16980',
                    borderColor: '#38a169',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    type: 'line',
                    label: '累積百分比',
                    data: cumulativeData,
                    borderColor: '#38a169',
                    backgroundColor: '#ef444420',
                    borderWidth: 3,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#ffffff',
                    pointRadius: 5,
                    yAxisID: 'y1',
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: axisTitleColor,
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '品質因素',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: {
                        maxRotation: 0,
                        font: { size: 8 },
                        color: axisTitleColor,
                        maxTicksLimit: 5,
                        callback: function(value, index) {
                            if (index < paretoData.length) {
                                const item = paretoData[index];
                                if (item.detail) {
                                    return [`${item.cause}`, `${item.reason}`, `${item.detail}`];
                                } else {
                                    return [`${item.cause}`, `${item.reason}`];
                                }
                            }
                            return '';
                        }
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '品質貢獻度',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: {
                        color: axisTitleColor
                    },
                    beginAtZero: true
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '累積百分比 (%)',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: {
                        color: axisTitleColor
                    },
                    min: 0,
                    max: 100,
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

// ==================== 工具函數 ====================
// 獲取可用量測者列表
function getAvailableMeasurers(project, operation) {
    const measurers = new Set();
    measurementData.forEach(record => {
        if (record.儀器編號 === project) {
            measurers.add(record.量測者);
        }
    });
    return Array.from(measurers);
}

function generateMeasurementData(mean, stdDev, count, realData = null) {
    // 如果有實際數據，優先使用實際數據
    if (realData && realData.length > 0) {
        return realData.slice();
    }
    
    // 否則生成模擬數據
    const data = [];
    for (let i = 0; i < count; i++) {
        const u1 = Math.random();
        const u2 = Math.random();
        const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        const value = mean + stdDev * z0;
        data.push(Math.max(0, value));
    }
    return data;
}

function createHistogramBins(data, binCount) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binWidth = (max - min) / binCount;
    
    // 決定小數顯示位數，避免標籤重複（例如 2.2-2.3 重複）
    let decimals = 0;
    if (binWidth < 1) decimals = 1;
    if (binWidth < 0.1) decimals = 2;
    if (binWidth < 0.01) decimals = 3;
    
    const bins = [];
    for (let i = 0; i < binCount; i++) {
        const start = min + i * binWidth;
        // 確保最後一個區間的結束值為 max，避免浮點誤差造成的缺口
        const end = i === binCount - 1 ? max : (min + (i + 1) * binWidth);
        bins.push({
            start,
            end,
            count: 0,
            label: `${start.toFixed(decimals)}-${end.toFixed(decimals)}`
        });
    }
    
    data.forEach(value => {
        const binIndex = Math.min(Math.floor((value - min) / binWidth), binCount - 1);
        bins[binIndex].count++;
    });
    
    return bins;
}

function getMeasurementColor(measurement) {
    switch(measurement) {
        case '測量值1': return '#3182ce'; // 藍色 - 測量值1
        case '測量值2': return '#3182ce'; // 藍色 - 測量值2
        case 'actionTime': return '#e53e3e';
        case 'phaseDiff': return '#38a169'; 
        case 'speed': return '#3182ce';
        case 'closeTime1': return '#d69e2e';
        case 'closeTime2': return '#805ad5';
        default: return '#667eea';
    }
}

function getProjectColor(project) {
    const colors = ['#e53e3e', '#38a169', '#3182ce', '#d69e2e', '#805ad5', '#ed8936', '#9f7aea'];
    const index = projects.indexOf(project);
    return colors[index % colors.length];
}

function getMeasurerColor(measurer) {
    const colors = {
        '涂X騰': '#e53e3e',
        '余O濤': '#38a169',
        '洪O祥': '#3182ce',
        '游X潔': '#d69e2e'
    };
    return colors[measurer] || '#805ad5';
}

function getMeasurementText(measurement) {
    switch(measurement) {
        case '測量值1': return '測量值1';
        case '測量值2': return '測量值2';
        case 'actionTime': return '動作時間';
        case 'phaseDiff': return '三相相差時間'; 
        case 'speed': return '速度';
        case 'closeTime1': return '投入操作第一組';
        case 'closeTime2': return '投入操作第二組';
        default: return measurement;
    }
}

// 計算相關係數的輔助函數
function calculateCorrelation(dataPoints) {
    const n = dataPoints.length;
    const sumX = dataPoints.reduce((sum, point) => sum + point.x, 0);
    const sumY = dataPoints.reduce((sum, point) => sum + point.y, 0);
    const sumXY = dataPoints.reduce((sum, point) => sum + point.x * point.y, 0);
    const sumXX = dataPoints.reduce((sum, point) => sum + point.x * point.x, 0);
    const sumYY = dataPoints.reduce((sum, point) => sum + point.y * point.y, 0);
    
    const correlation = (n * sumXY - sumX * sumY) / 
        Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));
    
    return correlation;
}

// ==================== 初始化 ====================
function initializeControls() {
    // 專案按鈕
    const projectButtons = document.getElementById('projectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    // 操作按鈕
    const operationButtons = document.getElementById('operationButtons');
    if (operationButtons) {
        operationButtons.innerHTML = '';
        operations.forEach(operation => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${operation === selectedOperation ? 'active' : ''}`;
            btn.textContent = operation;
            btn.dataset.value = operation;
            btn.addEventListener('click', () => selectOperation(operation));
            operationButtons.appendChild(btn);
        });
    }
    
    // 量測者按鈕 - 根據選擇的專案和操作顯示可用的量測者
    const groupButtons = document.getElementById('groupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        
        // 獲取當前專案和操作的量測者列表
        const availableMeasurers = getAvailableMeasurers(selectedProject, selectedOperation);
        
        availableMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedMeasurer ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectMeasurer(measurer));
                groupButtons.appendChild(btn);
            });
        
        // 如果沒有選中的量測者，但有可用的量測者，選擇第一個
        if (!selectedMeasurer && availableMeasurers.length > 0) {
            selectedMeasurer = availableMeasurers[0];
        }
    }
    
    // 量測手法按鈕 - A, B, C, D
    const measurementButtons = document.getElementById('measurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        const methods = ['A', 'B', 'C', 'D'];
        
        methods.forEach(method => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${method === selectedMethod ? 'active' : ''}`;
            btn.textContent = `手法${method}`;
            btn.dataset.value = method;
            btn.addEventListener('click', () => selectMethod(method));
            measurementButtons.appendChild(btn);
        });
    }
}

// 直方圖控制面板初始化
function initializeHistogramControls() {
    // 專案按鈕
    const projectButtons = document.getElementById('histogramProjectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedHistogramProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectHistogramProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    // 操作按鈕
    const operationButtons = document.getElementById('histogramOperationButtons');
    if (operationButtons) {
        operationButtons.innerHTML = '';
        operations.forEach(operation => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${operation === selectedHistogramOperation ? 'active' : ''}`;
            btn.textContent = operation;
            btn.dataset.value = operation;
            btn.addEventListener('click', () => selectHistogramOperation(operation));
            operationButtons.appendChild(btn);
        });
    }
    
    // 量測者按鈕
    const groupButtons = document.getElementById('histogramGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        const availableMeasurers = getAvailableMeasurers(selectedHistogramProject, selectedHistogramOperation);
        availableMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedHistogramGroup ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectHistogramGroup(measurer));
                groupButtons.appendChild(btn);
            });
    }
    
    // 量測手法按鈕
    const measurementButtons = document.getElementById('histogramMeasurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        const methods = ['A', 'B', 'C', 'D'];
        
        methods.forEach(method => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${method === selectedHistogramMethod ? 'active' : ''}`;
            btn.textContent = `手法${method}`;
            btn.dataset.value = method;
            btn.addEventListener('click', () => selectHistogramMethod(method));
            measurementButtons.appendChild(btn);
        });
    }
}

// 散佈圖控制面板初始化
function initializeScatterControls() {
    // 專案按鈕 - 添加"全部"選項
    const projectButtons = document.getElementById('scatterProjectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        const allProjects = ['全部', ...projects];
        allProjects.forEach(project => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${project === selectedScatterProject ? 'active' : ''}`;
            btn.textContent = project;
            btn.addEventListener('click', () => selectScatterProject(project));
            projectButtons.appendChild(btn);
        });
    }
    
    // 操作按鈕
    const operationButtons = document.getElementById('scatterOperationButtons');
    if (operationButtons) {
        operationButtons.innerHTML = '';
        operations.forEach(operation => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${operation === selectedScatterOperation ? 'active' : ''}`;
            btn.textContent = operation;
            btn.dataset.value = operation;
            btn.addEventListener('click', () => selectScatterOperation(operation));
            operationButtons.appendChild(btn);
        });
    }
    
    // 量測者按鈕 - 添加"全部"選項
    const groupButtons = document.getElementById('scatterGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        let availableMeasurers;
        if (selectedScatterProject === '全部') {
            // 如果選擇全部儀器，顯示所有量測者
            const allMeasurers = new Set();
            projects.forEach(proj => {
                getAvailableMeasurers(proj, selectedScatterOperation).forEach(m => allMeasurers.add(m));
            });
            availableMeasurers = Array.from(allMeasurers);
        } else {
            availableMeasurers = getAvailableMeasurers(selectedScatterProject, selectedScatterOperation);
        }
        const allMeasurers = ['全部', ...availableMeasurers];
        allMeasurers.forEach(measurer => {
                const btn = document.createElement('button');
            btn.className = `control-btn ${measurer === selectedScatterGroup ? 'active' : ''}`;
            btn.textContent = measurer;
            btn.dataset.value = measurer;
            btn.addEventListener('click', () => selectScatterGroup(measurer));
                groupButtons.appendChild(btn);
            });
    }
    
    // X軸量測手法按鈕
    const xMeasurementButtons = document.getElementById('scatterXMeasurementButtons');
    if (xMeasurementButtons) {
        xMeasurementButtons.innerHTML = '';
        const methods = ['A', 'B', 'C', 'D'];
        
        methods.forEach(method => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${method === selectedScatterMethodX ? 'active' : ''}`;
            btn.textContent = `手法${method}`;
            btn.dataset.value = method;
            btn.addEventListener('click', () => selectScatterMethodX(method));
            xMeasurementButtons.appendChild(btn);
        });
    }
    
    // Y軸量測手法按鈕
    const yMeasurementButtons = document.getElementById('scatterYMeasurementButtons');
    if (yMeasurementButtons) {
        yMeasurementButtons.innerHTML = '';
        const methods = ['A', 'B', 'C', 'D'];
        
        methods.forEach(method => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${method === selectedScatterMethodY ? 'active' : ''}`;
            btn.textContent = `手法${method}`;
            btn.dataset.value = method;
            btn.addEventListener('click', () => selectScatterMethodY(method));
            yMeasurementButtons.appendChild(btn);
        });
    }
}

function initializeOverviewTable() {
    const tbody = document.querySelector('#overviewTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // 按照量測手法分組重新組織數據
    const methodGroups = {};
    
    // 從原始數據中按照量測手法、量測者、操作類型分組
    const methods = ['A', 'B', 'C', 'D'];
    const operations = ['閉合', '開啟'];
    
    measurementData.forEach(record => {
        const method = record.量測手法;
        const measurer = record.量測者;
        const instrument = record.儀器編號;
        
        operations.forEach(operation => {
            const key = `${instrument}-${measurer}-${operation}-${method}`;
            
            if (!methodGroups[key]) {
                methodGroups[key] = {
                    儀器編號: instrument,
                    量測者: measurer,
                    操作: operation,
                    量測手法: method,
                    測量值1: [],
                    測量值2: []
                };
            }
            
            // 添加測量值1和測量值2
            if (record[operation] && record[operation].測量值1 !== null && record[operation].測量值1 !== undefined) {
                methodGroups[key].測量值1.push(record[operation].測量值1);
            }
            if (record[operation] && record[operation].測量值2 !== null && record[operation].測量值2 !== undefined) {
                methodGroups[key].測量值2.push(record[operation].測量值2);
            }
        });
    });
    
    // 按照專案順序（20240304A → 20240304B → 20240304C → 20250224A）排序
    // 每個專案內：量測者 → 操作類型（閉合 → 開啟）→ 量測手法（A → B → C → D）
    const projectOrder = {
        '20240304A': 1,
        '20240304B': 2,
        '20240304C': 3,
        '20250224A': 4
    };
    const measurerOrder = {
        '涂X騰': 1,
        '余O濤': 2,
        '洪O祥': 3,
        '游X潔': 4
    };
    const operationOrder = {
        '閉合': 1,
        '開啟': 2
    };
    const methodOrder = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4
    };
    
    const sortedKeys = Object.keys(methodGroups).sort((a, b) => {
        const [projectA, measurerA, operationA, methodA] = a.split('-');
        const [projectB, measurerB, operationB, methodB] = b.split('-');
        
        // 1. 先按儀器編號排序（專案順序）
        const projectOrderA = projectOrder[projectA] || 99;
        const projectOrderB = projectOrder[projectB] || 99;
        if (projectOrderA !== projectOrderB) {
            return projectOrderA - projectOrderB;
        }
        
        // 2. 再按量測者排序
        const measurerOrderA = measurerOrder[measurerA] || 99;
        const measurerOrderB = measurerOrder[measurerB] || 99;
        if (measurerOrderA !== measurerOrderB) {
            return measurerOrderA - measurerOrderB;
        }
        
        // 3. 再按操作類型排序（閉合在前）
        const operationOrderA = operationOrder[operationA] || 99;
        const operationOrderB = operationOrder[operationB] || 99;
        if (operationOrderA !== operationOrderB) {
            return operationOrderA - operationOrderB;
        }
        
        // 4. 最後按量測手法排序（A、B、C、D）
        const methodOrderA = methodOrder[methodA] || 99;
        const methodOrderB = methodOrder[methodB] || 99;
        return methodOrderA - methodOrderB;
    });
    
    sortedKeys.forEach(key => {
        const group = methodGroups[key];
        const allValues = [...group.測量值1, ...group.測量值2];
        
        if (allValues.length > 0) {
            const stats = calculateStats(allValues);
            const limits = specLimits[group.操作] || {};
            const outliers = detectOutliersWithDiagnosis(allValues, stats.mean, stats.stdDev, limits.上限值, limits.下限值);
        
        const row = tbody.insertRow();
        
            // 狀態根據「平均值」與標準/規格範圍決定
        let status = 'excellent';
        let statusText = '優良';
            const stdLower = limits['標準值下限'];
            const stdUpper = limits['標準值上限'];
            const lsl = limits['下限值'];
            const usl = limits['上限值'];
            const mean = stats.mean;

            if (typeof mean === 'number') {
                if ((typeof lsl === 'number' && mean < lsl) || (typeof usl === 'number' && mean > usl)) {
            status = 'critical';
            statusText = '異常';
                } else if ((typeof stdLower === 'number' && mean < stdLower) || (typeof stdUpper === 'number' && mean > stdUpper)) {
            status = 'warning';
            statusText = '可改善';
                } else {
                    status = 'excellent';
                    statusText = '優良';
                }
        }
        
        row.innerHTML = `
                <td style="font-weight: 600;">${group.儀器編號}</td>
                <td>${group.操作}-${group.量測者}-量測手法${group.量測手法} (測量值1&2)</td>
                <td>${stats.n}</td>
                <td>${stats.mean.toFixed(2)}</td>
                <td>${stats.stdDev.toFixed(2)}</td>
                <td style="color: #dc2626;">${limits.下限值 ? `${limits.下限值}~` : '≤'}${limits.上限值}</td>
                <td style="color: #f59e0b;">${limits.標準值下限 ?? ''}~${limits.標準值上限 ?? ''}</td>
                <td class="${outliers.length > 0 ? 'status-critical' : 'status-excellent'}">${outliers.length}</td>
            <td class="status-${status}">${statusText}</td>
        `;
        }
    });
}

function initializeStatisticsTable() {
    const tbody = document.querySelector('#statisticsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // 按照量測手法分組重新組織數據
    const methodGroups = {};
    
    // 從原始數據中按照量測手法、量測者、操作類型分組
    const methods = ['A', 'B', 'C', 'D'];
    const operations = ['閉合', '開啟'];
    
    measurementData.forEach(record => {
        const method = record.量測手法;
        const measurer = record.量測者;
        const instrument = record.儀器編號;
        
        operations.forEach(operation => {
            const key = `${instrument}-${measurer}-${operation}-${method}`;
            
            if (!methodGroups[key]) {
                methodGroups[key] = {
                    儀器編號: instrument,
                    量測者: measurer,
                    操作: operation,
                    量測手法: method,
                    測量值1: [],
                    測量值2: []
                };
            }
            
            // 添加測量值1和測量值2
            if (record[operation] && record[operation].測量值1 !== null && record[operation].測量值1 !== undefined) {
                methodGroups[key].測量值1.push(record[operation].測量值1);
            }
            if (record[operation] && record[operation].測量值2 !== null && record[operation].測量值2 !== undefined) {
                methodGroups[key].測量值2.push(record[operation].測量值2);
            }
        });
    });
    
    // 按照專案順序（20240304A → 20240304B → 20240304C → 20250224A）排序
    // 每個專案內：量測者 → 操作類型（閉合 → 開啟）→ 量測手法（A → B → C → D）
    const projectOrder = {
        '20240304A': 1,
        '20240304B': 2,
        '20240304C': 3,
        '20250224A': 4
    };
    const measurerOrder = {
        '涂X騰': 1,
        '余O濤': 2,
        '洪O祥': 3,
        '游X潔': 4
    };
    const operationOrder = {
        '閉合': 1,
        '開啟': 2
    };
    const methodOrder = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4
    };
    
    const sortedKeys = Object.keys(methodGroups).sort((a, b) => {
        const [projectA, measurerA, operationA, methodA] = a.split('-');
        const [projectB, measurerB, operationB, methodB] = b.split('-');
        
        // 1. 先按儀器編號排序（專案順序）
        const projectOrderA = projectOrder[projectA] || 99;
        const projectOrderB = projectOrder[projectB] || 99;
        if (projectOrderA !== projectOrderB) {
            return projectOrderA - projectOrderB;
        }
        
        // 2. 再按量測者排序
        const measurerOrderA = measurerOrder[measurerA] || 99;
        const measurerOrderB = measurerOrder[measurerB] || 99;
        if (measurerOrderA !== measurerOrderB) {
            return measurerOrderA - measurerOrderB;
        }
        
        // 3. 再按操作類型排序（閉合在前）
        const operationOrderA = operationOrder[operationA] || 99;
        const operationOrderB = operationOrder[operationB] || 99;
        if (operationOrderA !== operationOrderB) {
            return operationOrderA - operationOrderB;
        }
        
        // 4. 最後按量測手法排序（A、B、C、D）
        const methodOrderA = methodOrder[methodA] || 99;
        const methodOrderB = methodOrder[methodB] || 99;
        return methodOrderA - methodOrderB;
    });
    
    sortedKeys.forEach(key => {
        const group = methodGroups[key];
        const allValues = [...group.測量值1, ...group.測量值2];
        
        if (allValues.length > 0) {
            const stats = calculateStats(allValues);
            const limits = specLimits[group.操作] || {};
            const outliers = detectOutliersWithDiagnosis(allValues, stats.mean, stats.stdDev, limits.上限值, limits.下限值);
            
            const row = tbody.insertRow();
            
            let statusClass = 'excellent';
            let status = '正常';
            if (outliers.length > 0) {
                statusClass = 'critical';
                status = '異常';
            }
            
            row.innerHTML = `
                <td>${group.儀器編號}</td>
                <td>${group.操作}-${group.量測者}-量測手法${group.量測手法} (測量值1&2)</td>
                <td>${stats.n}</td>
                <td>${stats.mean.toFixed(2)}</td>
                <td>${stats.stdDev.toFixed(2)}</td>
                <td>${stats.min ? stats.min.toFixed(2) : 'N/A'}</td>
                <td>${stats.max ? stats.max.toFixed(2) : 'N/A'}</td>
                <td class="${outliers.length > 0 ? 'status-critical' : 'status-excellent'}">${outliers.length}</td>
                <td class="status-${statusClass}">${status}</td>
            `;
        }
    });
}


// ==================== 統計數據計算 ====================
function updateHeaderStats() {
    const measurementData = circuitBreakerData["量測數據"];
    
    // 計算總測量數（所有測量值的總數）
    let totalMeasurements = 0;
    let totalOutliers = 0;
    const uniqueProjects = new Set();
    const uniqueInstruments = new Set();
    
    measurementData.forEach(record => {
        uniqueInstruments.add(record.儀器編號);
        
        // 計算每個記錄的測量值數量
        if (record.閉合 && record.閉合.測量值1 !== null && record.閉合.測量值1 !== undefined) {
            totalMeasurements++;
        }
        if (record.閉合 && record.閉合.測量值2 !== null && record.閉合.測量值2 !== undefined) {
            totalMeasurements++;
        }
        if (record.開啟 && record.開啟.測量值1 !== null && record.開啟.測量值1 !== undefined) {
            totalMeasurements++;
        }
        if (record.開啟 && record.開啟.測量值2 !== null && record.開啟.測量值2 !== undefined) {
            totalMeasurements++;
        }
    });
    
    // 計算專案數（儀器編號的數量）
    const projectCount = uniqueInstruments.size;
    
    // 計算檔位數（量測者的數量）
    const measurerCount = new Set(measurementData.map(record => record.量測者)).size;
    
    // 計算異常點總數
    Object.values(spcData).forEach(data => {
        totalOutliers += data.outliers || 0;
    });
    
    // 更新HTML中的統計數據
    const totalMeasurementsEl = document.querySelector('.header-stat-value');
    const measurerCountEl = document.querySelectorAll('.header-stat-value')[1];
    const instrumentCountEl = document.querySelectorAll('.header-stat-value')[2];
    const methodCountEl = document.querySelectorAll('.header-stat-value')[3];
    const outlierCountEl = document.querySelectorAll('.header-stat-value')[4];
    
    if (totalMeasurementsEl) totalMeasurementsEl.textContent = totalMeasurements;
    if (measurerCountEl) measurerCountEl.textContent = measurerCount;
    if (instrumentCountEl) instrumentCountEl.textContent = projectCount;
    if (methodCountEl) methodCountEl.textContent = 4; // A、B、C、D 四種手法
    if (outlierCountEl) outlierCountEl.textContent = totalOutliers;
    
    // 更新詳細統計資訊
    const statsDetails = document.querySelector('.stats-details');
    if (statsDetails) {
        const outlierPercentage = totalMeasurements > 0 ? ((totalOutliers / totalMeasurements) * 100).toFixed(1) : 0;
        statsDetails.innerHTML = `
            • 總測量數: ${totalMeasurements} 筆 (${projectCount}個儀器編號完整數據)<br>
            • 異常點: ${totalOutliers} 個 (${outlierPercentage}%)<br>
            • 測量者數：${measurerCount} 位<br>
            • 儀器數：${projectCount} 台<br>
            • 量測手法：4 種 (A、B、C、D)<br>
            • 測量項目：閉合/開啟 動作時間<br>
            • 品質主要集中在「測量手法標準化」與「量測者技能一致」
        `;
    }
}

// ==================== 主初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Circuit Breaker Analysis System Initializing...');
    
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    Chart.defaults.font.family = "'PingFang TC', 'Microsoft JhengHei', sans-serif";
    Chart.defaults.color = '#4a5568';
    
    // 先初始化控制面板，再初始化表格
    initializeControls();
    initializeHistogramControls();
    initializeScatterControls();
    initializeOverviewTable();
    initializeStatisticsTable();
    
    // 初始化圖表
    setTimeout(() => {
        updateControlChart();
        updateHistogram();
        updateScatterPlot();
        updateParetoChart();
        
        // 在SPC數據生成完成後更新統計數據
        updateHeaderStats();
    }, 1000);

    // 回到頂端按鈕邏輯
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        const toggleVisibility = () => {
            const threshold = 300; // 滾動超過 300px 才顯示
            if (window.scrollY > threshold) {
                backToTopBtn.classList.add('back-to-top--visible');
            } else {
                backToTopBtn.classList.remove('back-to-top--visible');
            }
        };

        // 初始與滾動時檢查
        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        // 點擊平滑回頂部
        backToTopBtn.addEventListener('click', () => {
            // 先將焦點移到 body 以利鍵盤/螢幕閱讀器
            document.body.setAttribute('tabindex', '-1');
            document.body.focus({ preventScroll: true });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 鍵盤支援：Enter/Space 觸發
        backToTopBtn.addEventListener('keydown', (e) => {
            const isActivateKey = e.key === 'Enter' || e.key === ' ';
            if (isActivateKey) {
                e.preventDefault();
                backToTopBtn.click();
            }
        });
    }

    // 深色模式切換與持久化
    const themeToggleBtn = document.getElementById('themeToggle');
    const rootHtml = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (mode) => {
        if (mode === 'dark') {
            rootHtml.classList.add('dark');
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-pressed', 'true');
                themeToggleBtn.textContent = '☀️ 淺色模式';
            }
        } else {
            rootHtml.classList.remove('dark');
            if (themeToggleBtn) {
                themeToggleBtn.setAttribute('aria-pressed', 'false');
                themeToggleBtn.textContent = '🌙 深色模式';
            }
        }
    };

    // 初始主題：以 localStorage 優先，否則預設為淺色模式
    applyTheme(savedTheme ? savedTheme : 'light');

    // 切換點擊
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = rootHtml.classList.toggle('dark');
            const mode = isDark ? 'dark' : 'light';
            localStorage.setItem('theme', mode);
            themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            themeToggleBtn.textContent = isDark ? '☀️ 淺色模式' : '🌙 深色模式';
            // 重新繪製受影響的圖表，使座標軸標題配色更新
            updateParetoChart();
        });
    }
});