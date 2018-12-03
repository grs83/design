const testData = {
    "cod": "200",
    "message": 0.0043,
    "cnt": 38,
    "list": [
        {
            "dt": 1543557600,
            "main": {
                "temp": 54.03,
                "temp_min": 53.39,
                "temp_max": 54.03,
                "pressure": 984.38,
                "sea_level": 1020.72,
                "grnd_level": 984.38,
                "humidity": 100,
                "temp_kf": 0.35
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 11.3,
                "deg": 273.504
            },
            "rain": {
                "3h": 0.4575
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-30 06:00:00"
        },
        {
            "dt": 1543568400,
            "main": {
                "temp": 51.67,
                "temp_min": 51.2,
                "temp_max": 51.67,
                "pressure": 985.55,
                "sea_level": 1021.8,
                "grnd_level": 985.55,
                "humidity": 100,
                "temp_kf": 0.27
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.65,
                "deg": 286.004
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-30 09:00:00"
        },
        {
            "dt": 1543579200,
            "main": {
                "temp": 49.3,
                "temp_min": 48.98,
                "temp_max": 49.3,
                "pressure": 986.22,
                "sea_level": 1022.69,
                "grnd_level": 986.22,
                "humidity": 100,
                "temp_kf": 0.18
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.19,
                "deg": 290
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-30 12:00:00"
        },
        {
            "dt": 1543590000,
            "main": {
                "temp": 44.89,
                "temp_min": 44.72,
                "temp_max": 44.89,
                "pressure": 988.63,
                "sea_level": 1025.27,
                "grnd_level": 988.63,
                "humidity": 100,
                "temp_kf": 0.09
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.18,
                "deg": 294.006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-30 15:00:00"
        },
        {
            "dt": 1543600800,
            "main": {
                "temp": 57.33,
                "temp_min": 57.33,
                "temp_max": 57.33,
                "pressure": 990.72,
                "sea_level": 1027.15,
                "grnd_level": 990.72,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.59,
                "deg": 252.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-30 18:00:00"
        },
        {
            "dt": 1543611600,
            "main": {
                "temp": 59.34,
                "temp_min": 59.34,
                "temp_max": 59.34,
                "pressure": 990.61,
                "sea_level": 1026.95,
                "grnd_level": 990.61,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.11,
                "deg": 229.003
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-30 21:00:00"
        },
        {
            "dt": 1543622400,
            "main": {
                "temp": 57.18,
                "temp_min": 57.18,
                "temp_max": 57.18,
                "pressure": 990.6,
                "sea_level": 1027.01,
                "grnd_level": 990.6,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.84,
                "deg": 255.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-01 00:00:00"
        },
        {
            "dt": 1543633200,
            "main": {
                "temp": 46.19,
                "temp_min": 46.19,
                "temp_max": 46.19,
                "pressure": 991.33,
                "sea_level": 1028.02,
                "grnd_level": 991.33,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.59,
                "deg": 303.503
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-01 03:00:00"
        },
        {
            "dt": 1543644000,
            "main": {
                "temp": 41.12,
                "temp_min": 41.12,
                "temp_max": 41.12,
                "pressure": 992.06,
                "sea_level": 1028.89,
                "grnd_level": 992.06,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.84,
                "deg": 326.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-01 06:00:00"
        },
        {
            "dt": 1543654800,
            "main": {
                "temp": 38,
                "temp_min": 38,
                "temp_max": 38,
                "pressure": 991.91,
                "sea_level": 1028.88,
                "grnd_level": 991.91,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.49,
                "deg": 2.00076
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-01 09:00:00"
        },
        {
            "dt": 1543665600,
            "main": {
                "temp": 35.21,
                "temp_min": 35.21,
                "temp_max": 35.21,
                "pressure": 991.38,
                "sea_level": 1028.41,
                "grnd_level": 991.38,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.71,
                "deg": 359.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-01 12:00:00"
        },
        {
            "dt": 1543676400,
            "main": {
                "temp": 33.55,
                "temp_min": 33.55,
                "temp_max": 33.55,
                "pressure": 991.9,
                "sea_level": 1028.9,
                "grnd_level": 991.9,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.29,
                "deg": 322
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-01 15:00:00"
        },
        {
            "dt": 1543687200,
            "main": {
                "temp": 51.1,
                "temp_min": 51.1,
                "temp_max": 51.1,
                "pressure": 991.81,
                "sea_level": 1028.52,
                "grnd_level": 991.81,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.81,
                "deg": 225
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-01 18:00:00"
        },
        {
            "dt": 1543698000,
            "main": {
                "temp": 51.52,
                "temp_min": 51.52,
                "temp_max": 51.52,
                "pressure": 988.67,
                "sea_level": 1025.24,
                "grnd_level": 988.67,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 9.75,
                "deg": 265.501
            },
            "rain": {
                "3h": 3.685
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-01 21:00:00"
        },
        {
            "dt": 1543708800,
            "main": {
                "temp": 52.43,
                "temp_min": 52.43,
                "temp_max": 52.43,
                "pressure": 986.65,
                "sea_level": 1023.21,
                "grnd_level": 986.65,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 9.78,
                "deg": 279.503
            },
            "rain": {
                "3h": 0.135
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-02 00:00:00"
        },
        {
            "dt": 1543719600,
            "main": {
                "temp": 45.61,
                "temp_min": 45.61,
                "temp_max": 45.61,
                "pressure": 987.06,
                "sea_level": 1023.82,
                "grnd_level": 987.06,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.3,
                "deg": 300.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-02 03:00:00"
        },
        {
            "dt": 1543730400,
            "main": {
                "temp": 41.67,
                "temp_min": 41.67,
                "temp_max": 41.67,
                "pressure": 988.32,
                "sea_level": 1025.12,
                "grnd_level": 988.32,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.03,
                "deg": 290.504
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-02 06:00:00"
        },
        {
            "dt": 1543741200,
            "main": {
                "temp": 40.66,
                "temp_min": 40.66,
                "temp_max": 40.66,
                "pressure": 988.7,
                "sea_level": 1025.49,
                "grnd_level": 988.7,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.46,
                "deg": 307.003
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-02 09:00:00"
        },
        {
            "dt": 1543752000,
            "main": {
                "temp": 39.87,
                "temp_min": 39.87,
                "temp_max": 39.87,
                "pressure": 988.08,
                "sea_level": 1025,
                "grnd_level": 988.08,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.96,
                "deg": 293.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-02 12:00:00"
        },
        {
            "dt": 1543762800,
            "main": {
                "temp": 36.31,
                "temp_min": 36.31,
                "temp_max": 36.31,
                "pressure": 989.29,
                "sea_level": 1026.37,
                "grnd_level": 989.29,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.74,
                "deg": 301.504
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-02 15:00:00"
        },
        {
            "dt": 1543773600,
            "main": {
                "temp": 50.76,
                "temp_min": 50.76,
                "temp_max": 50.76,
                "pressure": 991.11,
                "sea_level": 1028.05,
                "grnd_level": 991.11,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.5,
                "deg": 305.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-02 18:00:00"
        },
        {
            "dt": 1543784400,
            "main": {
                "temp": 54.82,
                "temp_min": 54.82,
                "temp_max": 54.82,
                "pressure": 991,
                "sea_level": 1027.79,
                "grnd_level": 991,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.76,
                "deg": 310.503
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-02 21:00:00"
        },
        {
            "dt": 1543795200,
            "main": {
                "temp": 52.67,
                "temp_min": 52.67,
                "temp_max": 52.67,
                "pressure": 992.02,
                "sea_level": 1028.69,
                "grnd_level": 992.02,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.56,
                "deg": 18.0007
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-03 00:00:00"
        },
        {
            "dt": 1543806000,
            "main": {
                "temp": 39.04,
                "temp_min": 39.04,
                "temp_max": 39.04,
                "pressure": 993.77,
                "sea_level": 1030.73,
                "grnd_level": 993.77,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.64,
                "deg": 23.0039
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-03 03:00:00"
        },
        {
            "dt": 1543816800,
            "main": {
                "temp": 32.6,
                "temp_min": 32.6,
                "temp_max": 32.6,
                "pressure": 995.4,
                "sea_level": 1032.62,
                "grnd_level": 995.4,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.62,
                "deg": 11.5001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-03 06:00:00"
        },
        {
            "dt": 1543827600,
            "main": {
                "temp": 29.49,
                "temp_min": 29.49,
                "temp_max": 29.49,
                "pressure": 996.54,
                "sea_level": 1033.9,
                "grnd_level": 996.54,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.62,
                "deg": 8.00049
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-03 09:00:00"
        },
        {
            "dt": 1543838400,
            "main": {
                "temp": 27.16,
                "temp_min": 27.16,
                "temp_max": 27.16,
                "pressure": 997.32,
                "sea_level": 1035,
                "grnd_level": 997.32,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.48,
                "deg": 358.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-03 12:00:00"
        },
        {
            "dt": 1543849200,
            "main": {
                "temp": 24.87,
                "temp_min": 24.87,
                "temp_max": 24.87,
                "pressure": 998.61,
                "sea_level": 1036.34,
                "grnd_level": 998.61,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.04,
                "deg": 11.0001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-03 15:00:00"
        },
        {
            "dt": 1543860000,
            "main": {
                "temp": 44.52,
                "temp_min": 44.52,
                "temp_max": 44.52,
                "pressure": 999.86,
                "sea_level": 1037.31,
                "grnd_level": 999.86,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.74,
                "deg": 20.5061
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-03 18:00:00"
        },
        {
            "dt": 1543870800,
            "main": {
                "temp": 56.46,
                "temp_min": 56.46,
                "temp_max": 56.46,
                "pressure": 998.6,
                "sea_level": 1035.65,
                "grnd_level": 998.6,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.4,
                "deg": 46.5006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-03 21:00:00"
        },
        {
            "dt": 1543881600,
            "main": {
                "temp": 53.71,
                "temp_min": 53.71,
                "temp_max": 53.71,
                "pressure": 998.07,
                "sea_level": 1034.94,
                "grnd_level": 998.07,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.5,
                "deg": 44.5042
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-04 00:00:00"
        },
        {
            "dt": 1543892400,
            "main": {
                "temp": 42.17,
                "temp_min": 42.17,
                "temp_max": 42.17,
                "pressure": 999.24,
                "sea_level": 1036.23,
                "grnd_level": 999.24,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.98,
                "deg": 31.5058
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-04 03:00:00"
        },
        {
            "dt": 1543903200,
            "main": {
                "temp": 37.68,
                "temp_min": 37.68,
                "temp_max": 37.68,
                "pressure": 1000.2,
                "sea_level": 1037.52,
                "grnd_level": 1000.2,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.2,
                "deg": 23.0036
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-04 06:00:00"
        },
        {
            "dt": 1543914000,
            "main": {
                "temp": 34.4,
                "temp_min": 34.4,
                "temp_max": 34.4,
                "pressure": 1000.2,
                "sea_level": 1037.69,
                "grnd_level": 1000.2,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.84,
                "deg": 22.0013
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-04 09:00:00"
        },
        {
            "dt": 1543924800,
            "main": {
                "temp": 34.24,
                "temp_min": 34.24,
                "temp_max": 34.24,
                "pressure": 1000.07,
                "sea_level": 1037.69,
                "grnd_level": 1000.07,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.71,
                "deg": 22.5008
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-12-04 12:00:00"
        },
        {
            "dt": 1543935600,
            "main": {
                "temp": 36.02,
                "temp_min": 36.02,
                "temp_max": 36.02,
                "pressure": 1001.46,
                "sea_level": 1039.15,
                "grnd_level": 1001.46,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.74,
                "deg": 27.0044
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-04 15:00:00"
        },
        {
            "dt": 1543946400,
            "main": {
                "temp": 48.86,
                "temp_min": 48.86,
                "temp_max": 48.86,
                "pressure": 1002.15,
                "sea_level": 1039.69,
                "grnd_level": 1002.15,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.27,
                "deg": 42.502
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-04 18:00:00"
        },
        {
            "dt": 1543957200,
            "main": {
                "temp": 53.95,
                "temp_min": 53.95,
                "temp_max": 53.95,
                "pressure": 1001.4,
                "sea_level": 1038.47,
                "grnd_level": 1001.4,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 12.77,
                "deg": 47.0003
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-12-04 21:00:00"
        }
    ],
    "city": {
        "id": 420005749,
        "name": "Santa Clarita",
        "coord": {
            "lat": 34.44,
            "lon": -118.5321
        },
        "country": "US"
    }
}

export default (cb) => {
    // fetch('api.openweathermap.org/data/2.5/forecast?zip=92354,us&APPID=4ed155ccf63ae435ac3f6d0433fac707')
    // .then(res => res.body.json())
    // .then(data => console.log(data))
    setTimeout(() => {
        return cb(null, testData.list)
    }, 4000)
}
