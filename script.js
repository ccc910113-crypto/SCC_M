// ==================== 全域變數 ====================
// 斷路器動作特性試驗數據分析 - 正確分類結構
const circuitBreakerData = {
    // 永興一數據
    "永興一": {
        "投入操作(CLOSE)": {
            "動作時間": [99.9, 93.5, 99.4, 97.4, 100.5, 95.9, 96.0, 96.4, 97.3, 95.8],
            "三相相差時間": [0.1, 1.3, 0.3, 0.4, 0.4, 0.2, 0.3, 0.0, 0.4, 0.3],
            "速度(m/s)": [2.31, 2.54, 2.42, 2.37, 2.23, 2.45, 2.42, 2.40, 2.37, 2.43]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [28.7, 28.8, 29.2, 29.5, 28.1, 28.6, 26.3, 29.4, 29.0, 28.9],
                "三相相差時間": [0.3, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 0.2, 0.1, 0.1],
                "速度(m/s)": [10.28, 10.52, 9.92, 10.14, 10.51, 10.12, 10.37, 10.59, 10.38, 10.11]
            },
            "第二組(T2)": {
                "動作時間": [29.2, 28.8, 29.2, 29.8, 28.1, 28.9, 27.6, 29.3, 28.9, 29.3],
                "三相相差時間": [0.3, 0.3, 0.2, 0.3, 0.3, 0.2, 0.3, 0.1, 0.0, 0.2],
                "速度(m/s)": [10.10, 10.29, 10.25, 10.12, 10.65, 10.57, 10.54, 10.41, 10.20, 9.94]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [24.1, 23.3, 27.0, 29.0, 19.2, 24.5, 23.8, 27.3, 22.7, 23.2],
                "第二組": [25.2, 21.3, 27.6, 25.6, 20.7, 23.9, 23.0, 27.7, 21.1, 24.6]
            }
        }
    },
    // 永興二數據
    "永興二": {
        "投入操作(CLOSE)": {
            "動作時間": [99.9, 98.5, 101.9, 92.4, 98.7, 95.0, 96.8, 102.3, 97.7, 99.7, 97.6, 95.9, 95.6],
            "三相相差時間": [0.5, 0.6, 0.3, 0.1, 0.5, 0.3, 0.2, 0.2, 0.2, 0.5, 0.3, 0.2, 0.2],
            "速度(m/s)": [2.36, 2.33, 2.25, 2.56, 2.33, 2.53, 2.45, 2.24, 2.39, 2.34, 2.46, 2.45, 2.39]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [29.2, 29.3, 30.4, 28.6, 29.1, 30.0, 29.2, 28.6, 29.3, 30.1, 28.2, 29.7, 28.9],
                "三相相差時間": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.2],
                "速度(m/s)": [9.98, 10.01, 9.93, 10.34, 10.12, 10.08, 10.03, 10.41, 10.05, 10.13, 8.94, 10.07, 10.17]
            },
            "第二組(T2)": {
                "動作時間": [29.3, 29.3, 30.5, 28.6, 29.0, 30.0, 29.7, 28.8, 29.9, 30.4, 28.5, 29.9, 29.4],
                "三相相差時間": [0.3, 0.3, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1],
                "速度(m/s)": [9.73, 10.06, 9.94, 9.96, 10.00, 9.84, 10.03, 10.54, 10.22, 10.06, 10.46, 9.83, 9.90]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [16.4, 17.7, 18.3, 24.6, 18.7, 18.5, 17.9, 20.3, 18.1, 16.0, 21.7, 29.2, 25.3],
                "第二組": [15.2, 18.8, 16.5, 24.4, 20.6, 18.8, 18.1, 19.9, 18.4, 16.8, 21.5, 28.2, 26.1]
            }
        }
    },
    // 彰埤一數據
    "彰埤一": {
        "投入操作(CLOSE)": {
            "動作時間": [100.3, 99.9, 100.5, 99.4, 98.8, 99.4, 97.4, 97.3, 93.5, 97.8],
            "三相相差時間": [0.3, 0.1, 0.2, 0.3, 0.2, 0.4, 0.2, 0.1, 0.3, 0.2],
            "速度(m/s)": [2.34, 2.36, 2.38, 2.41, 2.37, 2.37, 2.42, 2.39, 2.56, 2.39]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [29.5, 28.7, 29.6, 29.9, 29.2, 29.2, 29.2, 29.7, 29.3, 29.9],
                "三相相差時間": [0.2, 0.2, 0.1, 0.2, 0.3, 0.1, 0.3, 0.2, 0.2, 0.2],
                "速度(m/s)": [10.24, 9.99, 10.00, 10.25, 9.88, 9.71, 9.77, 9.79, 10.32, 10.01]
            },
            "第二組(T2)": {
                "動作時間": [29.7, 28.9, 30.2, 29.8, 29.2, 29.4, 29.0, 29.8, 29.5, 29.9],
                "三相相差時間": [0.2, 0.1, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.2, 0.1],
                "速度(m/s)": [10.72, 10.24, 9.85, 10.15, 9.61, 9.72, 9.63, 9.76, 10.11, 9.83]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [29.9, 23.8, 28.7, 30.5, 22.9, 27.3, 28.1, 31.5, 33.0, 39.1],
                "第二組": [27.5, 19.1, 26.1, 28.8, 22.5, 26.9, 29.5, 28.0, 28.0, 29.5]
            }
        }
    },
    // 彰埤二數據
    "彰埤二": {
        "投入操作(CLOSE)": {
            "動作時間": [98.9, 96.7, 96.7, 98.7, 99.7, 93.7, 99.5, 96.0, 99.5, 97.4, 97.6, 98.5, 95.5],
            "三相相差時間": [0.0, 0.3, 0.2, 0.6, 0.2, 0.4, 0.3, 0.1, 0.5, 0.3, 0.1, 0.0, 0.4],
            "速度(m/s)": [2.37, 2.39, 2.44, 2.36, 2.47, 2.55, 2.41, 2.45, 2.34, 2.42, 2.41, 2.36, 2.48]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [29.5, 30.4, 29.4, 28.8, 29.3, 29.2, 31.5, 29.5, 29.3, 28.0, 28.0, 28.5],
                "三相相差時間": [0.2, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.2, 0.2],
                "速度(m/s)": [10.69, 9.98, 10.39, 10.30, 10.30, 10.13, 9.76, 9.96, 10.14, 9.86, 9.54, 10.14]
            },
            "第二組(T2)": {
                "動作時間": [29.4, 30.3, 29.8, 28.9, 29.4, 29.1, 29.1, 29.5, 29.4, 28.2, 28.1, 28.3],
                "三相相差時間": [0.1, 0.2, 0.4, 0.2, 0.2, 0.1, 0.2, 0.1, 0.2, 0.2, 0.1, 0.2],
                "速度(m/s)": [10.16, 10.05, 10.43, 10.11, 10.08, 10.02, 9.71, 9.79, 10.17, 9.56, 9.43, 10.30]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [18.9, 30.7, 26.8, 24.7, 25.3, 31.6, 25.9, 31.5, 31.0, 20.9, 35.9, 35.5, 27.6],
                "第二組": [16.9, 26.7, 21.8, 24.2, 24.5, 27.6, 22.8, 29.5, 29.2, 22.0, 31.4, 31.0, 24.3]
            }
        }
    },
    // 岡山數據
    "岡山": {
        "投入操作(CLOSE)": {
            "動作時間": [97.3, 99.2, 99.0, 96.4, 98.3, 94.3, 95.3, 97.3, 99.1, 94.9, 98.6, 99.4, 99.2, 100.9, 98.0, 96.9],
            "三相相差時間": [0.2, 0.3, 0.4, 0.4, 0.3, 0.4, 0.1, 0.3, 0.4, 0.2, 0.2, 0.1, 0.4, 0.1, 0.1, 0.2],
            "速度(m/s)": [2.39, 2.35, 2.36, 2.46, 2.42, 2.52, 2.52, 2.40, 2.34, 2.47, 2.38, 2.30, 2.37, 2.30, 2.36, 2.44]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [28.9, 30.4, 31.2, 29.7, 29.2, 30.6, 30.3, 29.7, 30.4, 30.9, 29.6, 30.9, 29.2, 30.3, 29.7],
                "三相相差時間": [0.2, 0.1, 0.2, 0.2, 0.0, 0.0, 0.3, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3],
                "速度(m/s)": [9.99, 10.11, 9.52, 10.34, 9.86, 9.86, 9.73, 9.83, 9.72, 9.90, 9.57, 9.82, 9.75, 9.78, 9.78]
            },
            "第二組(T2)": {
                "動作時間": [30.1, 31.1, 30.9, 29.9, 30.6, 30.4, 30.9, 29.8, 31.0, 31.0, 30.1, 30.6, 30.0, 30.3, 29.8],
                "三相相差時間": [0.3, 0.3, 0.3, 0.1, 0.0, 0.0, 0.4, 0.1, 0.2, 0.2, 0.3, 0.0, 0.3, 0.3, 0.3],
                "速度(m/s)": [9.96, 10.10, 9.56, 9.97, 9.58, 9.82, 9.72, 9.86, 9.64, 9.84, 9.79, 9.67, 9.89, 9.71, 9.67]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [28.5, 27.7, 27.6, 30.3, 29.9, 28.3, 26.1, 28.7, 31.1, 28.9, 28.5, 29.2, 29.0, 25.6, 24.6, 31.1],
                "第二組": [29.7, 26.4, 23.9, 27.2, 29.9, 23.6, 27.3, 28.6, 31.7, 28.1, 29.3, 26.8, 28.6, 27.2, 25.3, 30.2]
            }
        }
    },
    // 松湖數據
    "松湖": {
        "投入操作(CLOSE)": {
            "動作時間": [98.1, 96.7, 96.1, 99.3, 96.6, 101.7],
            "三相相差時間": [0.3, 0.5, 0.2, 0.3, 0.4, 0.3],
            "速度(m/s)": [2.40, 2.42, 2.43, 2.38, 2.42, 2.26]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [30.4, 30.7, 30.2, 29.7, 29.9, 31.4],
                "三相相差時間": [0.1, 0.3, 0.2, 0.3, 0.1, 0.3],
                "速度(m/s)": [9.82, 9.76, 10.11, 9.88, 8.99, 9.32]
            },
            "第二組(T2)": {
                "動作時間": [31.5, 32.8, 32.0, 32.9, 29.6, 31.3],
                "三相相差時間": [0.4, 0.0, 0.2, 0.2, 0.1, 0.3],
                "速度(m/s)": [9.53, 9.54, 10.18, 9.88, 8.85, 9.32]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [30.6, 30.2, 30.0, 29.0, 31.4, 40.2],
                "第二組": [28.2, 27.0, 29.6, 26.6, 29.4, 32.2]
            }
        }
    },
    // 宜梧數據
    "宜梧": {
        "投入操作(CLOSE)": {
            "動作時間": [94.2, 95.5, 97.2, 96.0, 98.8, 98.8],
            "三相相差時間": [0.1, 0.5, 0.2, 0.3, 0.2, 0.4],
            "速度(m/s)": [2.48, 2.50, 2.42, 2.46, 2.33, 2.35]
        },
        "跳脫操作(OPEN)": {
            "第一組(T1)": {
                "動作時間": [29.3, 29.4, 28.9, 29.6, 29.8, 29.7],
                "三相相差時間": [0.2, 0.2, 0.2, 0.5, 0.4, 0.1],
                "速度(m/s)": [9.88, 10.25, 9.90, 9.96, 9.87, 9.92]
            },
            "第二組(T2)": {
                "動作時間": [29.6, 29.1, 28.8, 29.6, 30.1, 29.9],
                "三相相差時間": [0.2, 0.2, 0.3, 0.5, 0.2, 0.1],
                "速度(m/s)": [9.62, 9.67, 9.83, 9.88, 9.79, 9.89]
            }
        },
        "投入-跳脫操作(CO)": {
            "自由跳脫": {
                "第一組": [32.8, 29.9, 24.0, 27.5, 24.4, 29.1],
                "第二組": [31.5, 31.3, 23.7, 28.8, 24.6, 27.0]
            }
        }
    }
};

// 標準值設定 - 斷路器動作特性試驗標準
const specLimits = {
    "投入操作(CLOSE)": {
        "動作時間": { lsl: 85, usl: 120 },
        "三相相差時間": { lsl: 0, usl: 2 },
        "速度(m/s)": { lsl: 2.0, usl: 2.6 }
    },
    "跳脫操作(OPEN)": {
        "第一組(T1)": {
            "動作時間": { lsl: 26, usl: 33 },
            "三相相差時間": { lsl: 0, usl: 2 },
            "速度(m/s)": { lsl: 9.0, usl: 11.0 }
        },
        "第二組(T2)": {
            "動作時間": { lsl: 26, usl: 33 },
            "三相相差時間": { lsl: 0, usl: 2 },
            "速度(m/s)": { lsl: 9.0, usl: 11.0 }
        }
    },
    "投入-跳脫操作(CO)": {
        "自由跳脫": {
            "第一組": { lsl: 8.33, usl: 38 },
            "第二組": { lsl: 8.33, usl: 38 }
        }
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

// 生成SPC數據結構
const spcData = {};
const phaseBreakdown = {};

Object.keys(circuitBreakerData).forEach(project => {
    const projectData = circuitBreakerData[project];
    
    Object.keys(projectData).forEach(operation => {
        const operationData = projectData[operation];
        
        if (operation === "投入操作(CLOSE)") {
            // 投入操作直接處理測量項目
            Object.keys(operationData).forEach(measurement => {
                const data = operationData[measurement];
                const stats = calculateStats(data);
                
                const limits = specLimits[operation][measurement];
                const outliersWithDiagnosis = detectOutliersWithDiagnosis(data, stats.mean, stats.stdDev, limits.usl, limits.lsl);
                
                const ucl = stats.mean + 3 * stats.stdDev;
                const lcl = Math.max(0, stats.mean - 3 * stats.stdDev);
                
                const cpu = limits.usl ? (limits.usl - stats.mean) / (3 * stats.stdDev) : null;
                const cpl = limits.lsl ? (stats.mean - limits.lsl) / (3 * stats.stdDev) : null;
                const cpk = cpu && cpl ? Math.min(cpu, cpl) : (cpu || cpl);
                
                const key = `${project}-${operation}-${measurement}`;
                spcData[key] = {
                    n: stats.n,
                    mean: stats.mean,
                    stdDev: stats.stdDev,
                    range: stats.range,
                    usl: limits.usl,
                    lsl: limits.lsl,
                    ucl: ucl,
                    lcl: lcl,
                    outliers: outliersWithDiagnosis.length,
                    cpu: cpu,
                    cpk: cpk,
                    singleSided: !limits.lsl,
                    measurements: data
                };
                
                phaseBreakdown[key] = {
                    project: project,
                    operation: operation,
                    group: null,
                    measurement: measurement,
                    n: stats.n,
                    mean: stats.mean,
                    stdDev: stats.stdDev,
                    range: stats.range,
                    min: stats.min,
                    max: stats.max,
                    usl: limits.usl,
                    lsl: limits.lsl,
                    ucl: ucl,
                    lcl: lcl,
                    outliers: outliersWithDiagnosis.length,
                    outliersValues: outliersWithDiagnosis.map(o => o.value),
                    outliersDiagnosis: outliersWithDiagnosis,
                    cpu: cpu,
                    cpl: cpl,
                    cpk: cpk,
                    singleSided: !limits.lsl,
                    measurements: data
                };
            });
        } else if (operation === "跳脫操作(OPEN)") {
            // 跳脫操作有群組結構
            Object.keys(operationData).forEach(group => {
                const groupData = operationData[group];
                Object.keys(groupData).forEach(measurement => {
                    const data = groupData[measurement];
                    const stats = calculateStats(data);
                    
                    const limits = specLimits[operation][group][measurement];
                    const outliersWithDiagnosis = detectOutliersWithDiagnosis(data, stats.mean, stats.stdDev, limits.usl, limits.lsl);
                    
                    const ucl = stats.mean + 3 * stats.stdDev;
                    const lcl = Math.max(0, stats.mean - 3 * stats.stdDev);
                    
                    const cpu = limits.usl ? (limits.usl - stats.mean) / (3 * stats.stdDev) : null;
                    const cpl = limits.lsl ? (stats.mean - limits.lsl) / (3 * stats.stdDev) : null;
                    const cpk = cpu && cpl ? Math.min(cpu, cpl) : (cpu || cpl);
                    
                    const key = `${project}-${operation}-${group}-${measurement}`;
                    spcData[key] = {
                        n: stats.n,
                        mean: stats.mean,
                        stdDev: stats.stdDev,
                        range: stats.range,
                        usl: limits.usl,
                        lsl: limits.lsl,
                        ucl: ucl,
                        lcl: lcl,
                        outliers: outliersWithDiagnosis.length,
                        cpu: cpu,
                        cpk: cpk,
                        singleSided: !limits.lsl,
                        measurements: data
                    };
                    
                    phaseBreakdown[key] = {
                        project: project,
                        operation: operation,
                        group: group,
                        measurement: measurement,
                        n: stats.n,
                        mean: stats.mean,
                        stdDev: stats.stdDev,
                        range: stats.range,
                        min: stats.min,
                        max: stats.max,
                        usl: limits.usl,
                        lsl: limits.lsl,
                        ucl: ucl,
                        lcl: lcl,
                        outliers: outliersWithDiagnosis.length,
                        outliersValues: outliersWithDiagnosis.map(o => o.value),
                        outliersDiagnosis: outliersWithDiagnosis,
                        cpu: cpu,
                        cpl: cpl,
                        cpk: cpk,
                        singleSided: !limits.lsl,
                        measurements: data
                    };
                });
            });
        } else if (operation === "投入-跳脫操作(CO)") {
            // 處理投入-跳脫操作
            Object.keys(operationData).forEach(freeTrip => {
                const freeTripData = operationData[freeTrip];
                Object.keys(freeTripData).forEach(group => {
                    const data = freeTripData[group];
                    const stats = calculateStats(data);
                    
                    const limits = specLimits[operation][freeTrip][group];
                    const outliersWithDiagnosis = detectOutliersWithDiagnosis(data, stats.mean, stats.stdDev, limits.usl, limits.lsl);
                    
                    const ucl = stats.mean + 3 * stats.stdDev;
                    const lcl = Math.max(0, stats.mean - 3 * stats.stdDev);
                    
                    const cpu = limits.usl ? (limits.usl - stats.mean) / (3 * stats.stdDev) : null;
                    const cpl = limits.lsl ? (stats.mean - limits.lsl) / (3 * stats.stdDev) : null;
                    const cpk = cpu && cpl ? Math.min(cpu, cpl) : (cpu || cpl);
                    
                    const key = `${project}-${operation}-${freeTrip}-${group}`;
                    spcData[key] = {
                        n: stats.n,
                        mean: stats.mean,
                        stdDev: stats.stdDev,
                        range: stats.range,
                        usl: limits.usl,
                        lsl: limits.lsl,
                        ucl: ucl,
                        lcl: lcl,
                        outliers: outliersWithDiagnosis.length,
                        cpu: cpu,
                        cpk: cpk,
                        singleSided: !limits.lsl,
                        measurements: data
                    };
                    
                    phaseBreakdown[key] = {
                        project: project,
                        operation: operation,
                        group: freeTrip,
                        measurement: group,
                        n: stats.n,
                        mean: stats.mean,
                        stdDev: stats.stdDev,
                        range: stats.range,
                        min: stats.min,
                        max: stats.max,
                        usl: limits.usl,
                        lsl: limits.lsl,
                        ucl: ucl,
                        lcl: lcl,
                        outliers: outliersWithDiagnosis.length,
                        outliersValues: outliersWithDiagnosis.map(o => o.value),
                        outliersDiagnosis: outliersWithDiagnosis,
                        cpu: cpu,
                        cpl: cpl,
                        cpk: cpk,
                        singleSided: !limits.lsl,
                        measurements: data
                    };
                });
            });
        }
    });
});

let currentSection = 'overview';
let selectedProject = '永興一';
let selectedOperation = '投入操作(CLOSE)';
let selectedGroup = null;
let selectedMeasurement = '動作時間';
let selectedGroupKey = '永興一-投入操作(CLOSE)-動作時間';

// 直方圖變數
let selectedHistogramProject = '永興一';
let selectedHistogramOperation = '投入操作(CLOSE)';
let selectedHistogramGroup = null;
let selectedHistogramMeasurement = '動作時間';

// 散佈圖變數
let selectedScatterProject = '永興一';
let selectedScatterOperation = '投入操作(CLOSE)';
let selectedScatterGroup = null;
let selectedScatterX = '動作時間';
let selectedScatterY = '速度(m/s)';

const projects = ['永興一', '永興二', '彰埤一', '彰埤二', '岡山', '松湖', '宜梧'];
const operations = ['投入操作(CLOSE)', '跳脫操作(OPEN)', '投入-跳脫操作(CO)'];

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
    updateControlChart();
}

function selectOperation(operation) {
    selectedOperation = operation;
    selectedGroup = null; // 重置群組選擇
    selectedMeasurement = null; // 重置測量項目選擇
    
    // 根據操作類型設定預設的測量項目
    if (operation === "投入操作(CLOSE)") {
        selectedMeasurement = '動作時間';
    } else if (operation === "跳脫操作(OPEN)") {
        selectedGroup = '第一組(T1)';
        selectedMeasurement = '動作時間';
    } else if (operation === "投入-跳脫操作(CO)") {
        selectedMeasurement = '第一組';
    }
    
    updateActiveButtons('#operationButtons .control-btn', operation);
    initializeControls(); // 重新初始化控制面板
    updateControlChart();
}

function selectGroup(group) {
    selectedGroup = group;
    selectedMeasurement = null; // 重置測量項目選擇
    
    // 根據操作類型設定預設的測量項目
    if (selectedOperation === "跳脫操作(OPEN)") {
        selectedMeasurement = '動作時間';
    }
    
    updateActiveButtons('#groupButtons .control-btn', group);
    initializeControls(); // 重新初始化控制面板
    updateControlChart();
}

function selectMeasurement(measurement) {
    selectedMeasurement = measurement;
    updateActiveButtons('#measurementButtons .control-btn', measurement);
    updateControlChart();
}

// 直方圖選擇函數
function selectHistogramProject(project) {
    selectedHistogramProject = project;
    updateActiveButtons('#histogramProjectButtons .control-btn', project);
    updateHistogram();
}

function selectHistogramOperation(operation) {
    selectedHistogramOperation = operation;
    selectedHistogramGroup = null;
    selectedHistogramMeasurement = null;
    
    if (operation === "投入操作(CLOSE)") {
        selectedHistogramMeasurement = '動作時間';
    } else if (operation === "跳脫操作(OPEN)") {
        selectedHistogramGroup = '第一組(T1)';
        selectedHistogramMeasurement = '動作時間';
    } else if (operation === "投入-跳脫操作(CO)") {
        selectedHistogramMeasurement = '第一組';
    }
    
    updateActiveButtons('#histogramOperationButtons .control-btn', operation);
    initializeHistogramControls();
    updateHistogram();
}

function selectHistogramGroup(group) {
    selectedHistogramGroup = group;
    selectedHistogramMeasurement = null;
    
    if (selectedHistogramOperation === "跳脫操作(OPEN)") {
        selectedHistogramMeasurement = '動作時間';
    }
    
    updateActiveButtons('#histogramGroupButtons .control-btn', group);
    initializeHistogramControls();
    updateHistogram();
}

function selectHistogramMeasurement(measurement) {
    selectedHistogramMeasurement = measurement;
    updateActiveButtons('#histogramMeasurementButtons .control-btn', measurement);
    updateHistogram();
}

// 散佈圖選擇函數
function selectScatterProject(project) {
    selectedScatterProject = project;
    updateActiveButtons('#scatterProjectButtons .control-btn', project);
    updateScatterPlot();
}

function selectScatterOperation(operation) {
    selectedScatterOperation = operation;
    selectedScatterGroup = null;
    selectedScatterX = null;
    selectedScatterY = null;
    
    if (operation === "投入操作(CLOSE)") {
        selectedScatterX = '動作時間';
        selectedScatterY = '速度(m/s)';
    } else if (operation === "跳脫操作(OPEN)") {
        selectedScatterGroup = '第一組(T1)';
        selectedScatterX = '動作時間';
        selectedScatterY = '速度(m/s)';
    } else if (operation === "投入-跳脫操作(CO)") {
        selectedScatterX = '第一組';
        selectedScatterY = '第二組';
    }
    
    updateActiveButtons('#scatterOperationButtons .control-btn', operation);
    initializeScatterControls();
    updateScatterPlot();
}

function selectScatterGroup(group) {
    selectedScatterGroup = group;
    selectedScatterX = null;
    selectedScatterY = null;
    
    if (selectedScatterOperation === "跳脫操作(OPEN)") {
        selectedScatterX = '動作時間';
        selectedScatterY = '速度(m/s)';
    }
    
    updateActiveButtons('#scatterGroupButtons .control-btn', group);
    initializeScatterControls();
    updateScatterPlot();
}

function selectScatterX(measurement) {
    selectedScatterX = measurement;
    updateActiveButtons('#scatterXMeasurementButtons .control-btn', measurement);
    updateScatterPlot();
}

function selectScatterY(measurement) {
    selectedScatterY = measurement;
    updateActiveButtons('#scatterYMeasurementButtons .control-btn', measurement);
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
    
    // 構建選擇的群組鍵
    let groupKey;
    if (selectedOperation === "投入操作(CLOSE)") {
        groupKey = `${selectedProject}-${selectedOperation}-${selectedMeasurement}`;
    } else if (selectedOperation === "跳脫操作(OPEN)") {
        groupKey = `${selectedProject}-${selectedOperation}-${selectedGroup}-${selectedMeasurement}`;
    } else if (selectedOperation === "投入-跳脫操作(CO)") {
        groupKey = `${selectedProject}-${selectedOperation}-自由跳脫-${selectedMeasurement}`;
    }
    
    const data = phaseBreakdown[groupKey];
    
    if (!data) {
        console.log(`No data found for ${groupKey}`);
        return;
    }
    
    const titleElement = document.getElementById('controlChartTitle');
    if (titleElement) {
        let title = `${selectedProject}-${selectedOperation}`;
        if (selectedGroup) {
            title += `-${selectedGroup}`;
        }
        title += `-${selectedMeasurement} 管制圖`;
        titleElement.textContent = title;
    }
    
    if (controlChart) {
        controlChart.destroy();
        controlChart = null;
    }
    
    const canvas = document.getElementById('controlChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 使用實際測量數據
    const measurementData = data.measurements;
    const labels = Array.from({length: measurementData.length}, (_, i) => `No.${i + 1}`);
    
    // 標註異常值
    const pointColors = measurementData.map(value => {
        if (data.outliersValues && data.outliersValues.includes(value)) {
            return '#ef4444'; // 紅色標記異常值
        }
        return getMeasurementColor(selectedMeasurement);
    });
    
    controlChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '測量值',
                    data: measurementData,
                    borderColor: getMeasurementColor(selectedMeasurement),
                    backgroundColor: pointColors.map(color => color + '40'),
                    pointBackgroundColor: pointColors,
                    borderWidth: 2,
                    pointRadius: 5,
                    fill: false
                },
                {
                    label: '中心線 (CL)',
                    data: new Array(measurementData.length).fill(data.mean),
                    borderColor: '#10b981',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: '上管制界限 (UCL)',
                    data: new Array(measurementData.length).fill(data.ucl),
                    borderColor: '#f59e0b',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [5, 5]
                },
                {
                    label: '下管制界限 (LCL)',
                    data: new Array(measurementData.length).fill(data.lcl),
                    borderColor: '#f59e0b',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [5, 5]
                },
                {
                    label: '上規格界限 (USL)',
                    data: new Array(measurementData.length).fill(data.usl),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [10, 5]
                },
                {
                    label: '下規格界限 (LSL)',
                    data: new Array(measurementData.length).fill(data.lsl),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    borderDash: [10, 5]
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
                        afterBody: function(tooltipItems) {
                            const value = tooltipItems[0].raw;
                            if (data.outliersValues && data.outliersValues.includes(value)) {
                                return ['', '⚠️ 異常值 (超出3σ界限)'];
                            }
                            if (data.usl && value > data.usl) {
                                return ['', '🚫 超出規格上限'];
                            }
                            if (data.lsl && value < data.lsl) {
                                return ['', '🚫 超出規格下限'];
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxTicksLimit: 8,
                        font: { size: 10 }
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

function updateHistogram() {
    console.log('Updating histogram...');
    
    // 構建選擇的群組鍵
    let groupKey;
    if (selectedHistogramOperation === "投入操作(CLOSE)") {
        groupKey = `${selectedHistogramProject}-${selectedHistogramOperation}-${selectedHistogramMeasurement}`;
    } else if (selectedHistogramOperation === "跳脫操作(OPEN)") {
        groupKey = `${selectedHistogramProject}-${selectedHistogramOperation}-${selectedHistogramGroup}-${selectedHistogramMeasurement}`;
    } else if (selectedHistogramOperation === "投入-跳脫操作(CO)") {
        groupKey = `${selectedHistogramProject}-${selectedHistogramOperation}-自由跳脫-${selectedHistogramMeasurement}`;
    }
    
    const data = phaseBreakdown[groupKey];
    
    if (!data) {
        console.log(`No data found for ${groupKey}`);
        return;
    }
    
    const titleElement = document.getElementById('histogramTitle');
    if (titleElement) {
        let title = `${selectedHistogramProject}-${selectedHistogramOperation}`;
        if (selectedHistogramGroup) {
            title += `-${selectedHistogramGroup}`;
        }
        title += `-${selectedHistogramMeasurement} 分布直方圖`;
        titleElement.textContent = title;
    }
    
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
    }
    
    const canvas = document.getElementById('histogramChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 使用實際測量數據
    const histogramData = data.measurements || generateMeasurementData(data.mean, data.stdDev, 100);
    const bins = createHistogramBins(histogramData, 10);
    
    histogramChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bins.map(bin => bin.label),
            datasets: [{
                label: '頻次',
                data: bins.map(bin => bin.count),
                backgroundColor: getMeasurementColor(selectedHistogramMeasurement) + '80',
                borderColor: getMeasurementColor(selectedHistogramMeasurement),
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
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

function updateScatterPlot() {
    console.log('Updating scatter plot...');
    
    const titleElement = document.getElementById('scatterTitle');
    if (titleElement) {
        let title = `${selectedScatterProject}-${selectedScatterOperation}`;
        if (selectedScatterGroup) {
            title += `-${selectedScatterGroup}`;
        }
        title += `-${selectedScatterX} vs ${selectedScatterY} 散布圖分析`;
        titleElement.textContent = title;
    }
    
    const phaseInfo = document.getElementById('scatterPhaseInfo');
    if (phaseInfo) {
        phaseInfo.textContent = `觀察${selectedScatterX}與${selectedScatterY}之間的相關性，特別注意異常值在各專案中的分布。`;
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
    
    // 構建X軸和Y軸的群組鍵
    let xGroupKey, yGroupKey;
    if (selectedScatterOperation === "投入操作(CLOSE)") {
        xGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-${selectedScatterX}`;
        yGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-${selectedScatterY}`;
    } else if (selectedScatterOperation === "跳脫操作(OPEN)") {
        xGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-${selectedScatterGroup}-${selectedScatterX}`;
        yGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-${selectedScatterGroup}-${selectedScatterY}`;
    } else if (selectedScatterOperation === "投入-跳脫操作(CO)") {
        xGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-自由跳脫-${selectedScatterX}`;
        yGroupKey = `${selectedScatterProject}-${selectedScatterOperation}-自由跳脫-${selectedScatterY}`;
    }
    
    const xData = phaseBreakdown[xGroupKey];
    const yData = phaseBreakdown[yGroupKey];
    
    if (xData && yData && xData.measurements && yData.measurements) {
        const minLength = Math.min(xData.measurements.length, yData.measurements.length);
        for (let i = 0; i < minLength; i++) {
            dataPoints.push({
                x: xData.measurements[i],
                y: yData.measurements[i],
                project: selectedScatterProject
            });
        }
    }
    
    // 計算相關係數
    const correlation = calculateCorrelation(dataPoints);
    
    // 更新統計資訊
    const correlationElement = document.getElementById('correlationValue');
    if (correlationElement) {
        correlationElement.textContent = correlation.toFixed(2);
    }
    
    scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: `${getMeasurementText(selectedScatterX)} vs ${getMeasurementText(selectedScatterY)}`,
                data: dataPoints,
                backgroundColor: dataPoints.map(point => getProjectColor(point.project) + '60'),
                borderColor: dataPoints.map(point => getProjectColor(point.project)),
                pointRadius: 4,
                pointHoverRadius: 6
            }]
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
                    callbacks: {
                        title: function(context) {
                            const point = dataPoints[context[0].dataIndex];
                            return `${point.project}`;
                        },
                        label: function(context) {
                            const xText = getMeasurementText(selectedScatterX);
                            const yText = getMeasurementText(selectedScatterY);
                            return [
                                `${xText}: ${context.parsed.x.toFixed(2)}`,
                                `${yText}: ${context.parsed.y.toFixed(2)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: `${getMeasurementText(selectedScatterX)}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: {
                        color: '#f3f4f6'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: `${getMeasurementText(selectedScatterY)}`,
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: {
                        color: '#f3f4f6'
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
    
    // 柏拉圖數據 - 反映各專案異常情況
    const paretoData = [
        { cause: '彰埤一投入操作異常', count: 3, percentage: 30.0 },
        { cause: '松湖速度異常', count: 2, percentage: 20.0 },
        { cause: '岡山動作時間異常', count: 2, percentage: 20.0 },
        { cause: '永興二三相相差異常', count: 2, percentage: 20.0 },
        { cause: '其他專案', count: 1, percentage: 10.0 }
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
            labels: paretoData.map(item => item.cause),
            datasets: [
                {
                    type: 'bar',
                    label: '異常次數',
                    data: paretoData.map(item => item.count),
                    backgroundColor: '#667eea80',
                    borderColor: '#667eea',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    type: 'line',
                    label: '累積百分比',
                    data: cumulativeData,
                    borderColor: '#ef4444',
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
                        text: '異常原因',
                        font: { size: 12, weight: 'bold' },
                        color: axisTitleColor
                    },
                    ticks: {
                        maxRotation: 45,
                        font: { size: 10 },
                        color: axisTitleColor
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '異常次數',
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

function getMeasurementText(measurement) {
    switch(measurement) {
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
    
    // 群組按鈕
    const groupButtons = document.getElementById('groupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        if (selectedOperation === "跳脫操作(OPEN)") {
            const groups = ['第一組(T1)', '第二組(T2)'];
            groups.forEach(group => {
                const btn = document.createElement('button');
                btn.className = `control-btn ${group === selectedGroup ? 'active' : ''}`;
                btn.textContent = group;
                btn.dataset.value = group;
                btn.addEventListener('click', () => selectGroup(group));
                groupButtons.appendChild(btn);
            });
        }
    }
    
    // 測量項目按鈕
    const measurementButtons = document.getElementById('measurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        let measurements = [];
        
        if (selectedOperation === "投入操作(CLOSE)") {
            measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
        } else if (selectedOperation === "跳脫操作(OPEN)") {
            if (selectedGroup) {
                measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
            }
        } else if (selectedOperation === "投入-跳脫操作(CO)") {
            measurements = ['第一組', '第二組'];
        }
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedMeasurement ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectMeasurement(measurement));
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
    
    // 群組按鈕
    const groupButtons = document.getElementById('histogramGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        if (selectedHistogramOperation === "跳脫操作(OPEN)") {
            const groups = ['第一組(T1)', '第二組(T2)'];
            groups.forEach(group => {
                const btn = document.createElement('button');
                btn.className = `control-btn ${group === selectedHistogramGroup ? 'active' : ''}`;
                btn.textContent = group;
                btn.dataset.value = group;
                btn.addEventListener('click', () => selectHistogramGroup(group));
                groupButtons.appendChild(btn);
            });
        }
    }
    
    // 測量項目按鈕
    const measurementButtons = document.getElementById('histogramMeasurementButtons');
    if (measurementButtons) {
        measurementButtons.innerHTML = '';
        let measurements = [];
        
        if (selectedHistogramOperation === "投入操作(CLOSE)") {
            measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
        } else if (selectedHistogramOperation === "跳脫操作(OPEN)") {
            if (selectedHistogramGroup) {
                measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
            }
        } else if (selectedHistogramOperation === "投入-跳脫操作(CO)") {
            measurements = ['第一組', '第二組'];
        }
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedHistogramMeasurement ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectHistogramMeasurement(measurement));
            measurementButtons.appendChild(btn);
        });
    }
}

// 散佈圖控制面板初始化
function initializeScatterControls() {
    // 專案按鈕
    const projectButtons = document.getElementById('scatterProjectButtons');
    if (projectButtons) {
        projectButtons.innerHTML = '';
        projects.forEach(project => {
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
    
    // 群組按鈕
    const groupButtons = document.getElementById('scatterGroupButtons');
    if (groupButtons) {
        groupButtons.innerHTML = '';
        if (selectedScatterOperation === "跳脫操作(OPEN)") {
            const groups = ['第一組(T1)', '第二組(T2)'];
            groups.forEach(group => {
                const btn = document.createElement('button');
                btn.className = `control-btn ${group === selectedScatterGroup ? 'active' : ''}`;
                btn.textContent = group;
                btn.dataset.value = group;
                btn.addEventListener('click', () => selectScatterGroup(group));
                groupButtons.appendChild(btn);
            });
        }
    }
    
    // X軸測量項目按鈕
    const xMeasurementButtons = document.getElementById('scatterXMeasurementButtons');
    if (xMeasurementButtons) {
        xMeasurementButtons.innerHTML = '';
        let measurements = [];
        
        if (selectedScatterOperation === "投入操作(CLOSE)") {
            measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
        } else if (selectedScatterOperation === "跳脫操作(OPEN)") {
            if (selectedScatterGroup) {
                measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
            }
        } else if (selectedScatterOperation === "投入-跳脫操作(CO)") {
            measurements = ['第一組', '第二組'];
        }
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedScatterX ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectScatterX(measurement));
            xMeasurementButtons.appendChild(btn);
        });
    }
    
    // Y軸測量項目按鈕
    const yMeasurementButtons = document.getElementById('scatterYMeasurementButtons');
    if (yMeasurementButtons) {
        yMeasurementButtons.innerHTML = '';
        let measurements = [];
        
        if (selectedScatterOperation === "投入操作(CLOSE)") {
            measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
        } else if (selectedScatterOperation === "跳脫操作(OPEN)") {
            if (selectedScatterGroup) {
                measurements = ['動作時間', '三相相差時間', '速度(m/s)'];
            }
        } else if (selectedScatterOperation === "投入-跳脫操作(CO)") {
            measurements = ['第一組', '第二組'];
        }
        
        measurements.forEach(measurement => {
            const btn = document.createElement('button');
            btn.className = `control-btn ${measurement === selectedScatterY ? 'active' : ''}`;
            btn.textContent = measurement;
            btn.dataset.value = measurement;
            btn.addEventListener('click', () => selectScatterY(measurement));
            yMeasurementButtons.appendChild(btn);
        });
    }
}

function initializeOverviewTable() {
    const tbody = document.querySelector('#overviewTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(spcData).forEach(groupKey => {
        const data = spcData[groupKey];
        const [project, operation, group, measurement] = groupKey.split('-');
        
        const row = tbody.insertRow();
        
        let status = 'excellent';
        let statusText = '優良';
        if (data.outliers > 0) {
            status = 'critical';
            statusText = '異常';
        } else if (data.cpk < 1.33) {
            status = 'warning';
            statusText = '可改善';
        }
        
        row.innerHTML = `
            <td style="font-weight: 600;">${project}</td>
            <td>${operation}${group ? '-' + group : ''}-${measurement}</td>
            <td>${data.n}</td>
            <td>${data.mean.toFixed(2)}</td>
            <td>${data.stdDev.toFixed(2)}</td>
            <td>${data.range ? data.range.toFixed(1) : 'N/A'}</td>
            <td style="color: #dc2626;">${data.lsl ? `${data.lsl}~` : '≤'}${data.usl}</td>
            <td style="color: #f59e0b;">${data.lcl.toFixed(2)}~${data.ucl.toFixed(2)}</td>
            <td class="${data.outliers > 0 ? 'status-critical' : 'status-excellent'}">${data.outliers}</td>
            <td class="status-${status}">${data.cpk ? data.cpk.toFixed(3) : 'N/A'}</td>
            <td class="status-${status}">${statusText}</td>
        `;
    });
}

function initializeStatisticsTable() {
    const tbody = document.querySelector('#statisticsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.keys(phaseBreakdown).forEach(phaseKey => {
        const data = phaseBreakdown[phaseKey];
        const [project, operation, group, measurement] = phaseKey.split('-');
        
        const row = tbody.insertRow();
        
        let gradeClass = 'excellent';
        let grade = 'A級';
        if (data.outliers > 0) {
            gradeClass = 'critical';
            grade = 'F級';
        } else if (data.cpk < 1.0) {
            gradeClass = 'warning';
            grade = 'C級';
        } else if (data.cpk < 1.33) {
            gradeClass = 'good';
            grade = 'B級';
        }
        
        const cv = (data.stdDev / data.mean * 100).toFixed(1);
        
        row.innerHTML = `
            <td>${project}</td>
            <td>${operation}${group ? '-' + group : ''}-${measurement}</td>
            <td>${data.n}</td>
            <td>${data.mean.toFixed(2)}</td>
            <td>${data.stdDev.toFixed(2)}</td>
            <td>${cv}%</td>
            <td class="${data.outliers > 0 ? 'status-critical' : 'status-excellent'}">${data.outliers}</td>
            <td>${data.cpu ? data.cpu.toFixed(3) : 'N/A'}</td>
            <td class="status-${gradeClass}">${data.cpk ? data.cpk.toFixed(3) : 'N/A'}</td>
            <td class="status-${gradeClass}">${grade}</td>
        `;
    });
}

// ===== 任務診斷：根據四個狀況輸出結果 =====
function runTaskDiagnosis() {
    const tbody = document.querySelector('#taskDiagnosisTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const results = diagnoseByRules();
    results.forEach(r => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td style="font-weight:600;">${r.project}</td>
            <td>${r.condition}</td>
            <td class="${r.severityClass}">${r.message}</td>
        `;
    });
}

function isWithinSpec(mean, limits) {
    if (!limits) return false;
    return mean >= limits.lsl && mean <= limits.usl;
}

function diagnoseByRules() {
    const results = [];
    const projectsList = Object.keys(circuitBreakerData);

    projectsList.forEach(project => {
        // CLOSE stats
        const closeAction = circuitBreakerData[project]['投入操作(CLOSE)'];
        const closeTimeStats = calculateStats(closeAction['動作時間']);
        const closeTimeLimits = specLimits['投入操作(CLOSE)']['動作時間'];
        const closeTimeOk = isWithinSpec(closeTimeStats.mean, closeTimeLimits);

        // OPEN stats (第一組、第二組，取平均以代表Open)
        const openAction = circuitBreakerData[project]['跳脫操作(OPEN)'];
        const openTimeStatsT1 = calculateStats(openAction['第一組(T1)']['動作時間']);
        const openTimeStatsT2 = calculateStats(openAction['第二組(T2)']['動作時間']);
        const openTimeMean = (openTimeStatsT1.mean + openTimeStatsT2.mean) / 2;
        const openTimeLimits = specLimits['跳脫操作(OPEN)']['第一組(T1)']['動作時間'];
        const openTimeOk = openTimeMean >= openTimeLimits.lsl && openTimeMean <= openTimeLimits.usl;

        // 僅當 CLOSE/OPEN 皆在規格內才進行四個狀況判斷
        if (!(closeTimeOk && openTimeOk)) {
            return;
        }

        // 狀況1：CO 自由跳脫超標
        const co = circuitBreakerData[project]['投入-跳脫操作(CO)'];
        const freeTrip1 = calculateStats(co['自由跳脫']['第一組']);
        const freeTrip2 = calculateStats(co['自由跳脫']['第二組']);
        const freeTripLimits = specLimits['投入-跳脫操作(CO)']['自由跳脫']['第一組'];
        const freeTrip1Out = freeTrip1.mean > freeTripLimits.usl || freeTrip1.mean < freeTripLimits.lsl;
        const freeTrip2Out = freeTrip2.mean > freeTripLimits.usl || freeTrip2.mean < freeTripLimits.lsl;
        if (freeTrip1Out || freeTrip2Out) {
            results.push({
                project,
                condition: '狀況1',
                message: '輔助開關調整異常（自由跳脫時間超過標準）',
                severityClass: 'status-critical'
            });
        }

        // 狀況2：速度超出標準
        const speedStats = calculateStats(closeAction['速度(m/s)']);
        const speedLimits = specLimits['投入操作(CLOSE)']['速度(m/s)'];
        if (speedStats.mean < speedLimits.lsl || speedStats.mean > speedLimits.usl) {
            results.push({
                project,
                condition: '狀況2',
                message: '輔助治具裝置不良（速度超出標準）',
                severityClass: 'status-warning'
            });
        }

        // 狀況3：三相相差 = 0（CLOSE/OPEN 皆如此才算）
        const closePhaseMean = calculateStats(closeAction['三相相差時間']).mean;
        const openPhaseMean = (calculateStats(openAction['第一組(T1)']['三相相差時間']).mean +
            calculateStats(openAction['第二組(T2)']['三相相差時間']).mean) / 2;
        if (closePhaseMean === 0 && openPhaseMean === 0) {
            results.push({
                project,
                condition: '狀況3',
                message: '儀器接線異常（三相時間相差為 0）',
                severityClass: 'status-warning'
            });
        }

        // 狀況4：CLOSE/OPEN 均高於 threshold = mean + 0.05 * (USL - mean)
        const closeThreshold = closeTimeStats.mean + 0.05 * (closeTimeLimits.usl - closeTimeStats.mean);
        const openThreshold = openTimeMean + 0.05 * (openTimeLimits.usl - openTimeMean);
        if (closeTimeStats.mean > closeThreshold && openTimeMean > openThreshold) {
            results.push({
                project,
                condition: '狀況4',
                message: '組裝調整不良（閉合與開啟時間高於平均差+5%）',
                severityClass: 'status-warning'
            });
        }
    });

    return results;
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
    runTaskDiagnosis();
    
    // 初始化圖表
    setTimeout(() => {
        updateControlChart();
        updateHistogram();
        updateScatterPlot();
        updateParetoChart();
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

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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

    // 初始主題：以 localStorage 優先，否則依系統偏好
    applyTheme(savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'));

    // 系統偏好變化時同步（若未手動設定）
    if (!savedTheme && window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener('change', (e) => {
            applyTheme(e.matches ? 'dark' : 'light');
        });
    }

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