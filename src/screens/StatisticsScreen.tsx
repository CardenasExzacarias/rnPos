import React from 'react'
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const StatisticsScreen = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels
    datasets: [
      {
        data: [20, 45, 28, 80, 99], // Y-axis data points
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={540}
        chartConfig={{
          // backgroundColor: '#ee0055',
          // backgroundGradientFrom: '#aaaaaa00',
          // backgroundGradientTo: '#aaaaaa00',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Label color
        }}
        style={{ marginVertical: 8 }}
      />
    </View>
  );
};

export default StatisticsScreen;