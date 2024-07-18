import React from 'react';
import ReactDOM from 'react-dom/client';
import { BlobProvider, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  return (
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    );
  }


// function App() {
//   const document = <MyDocument />   
//   return (
//       <BlobProvider document={document}>
//         {({ blob, url, loading, error }) => {
//         console.log(blob, loading, error, url, "blob?")
//         return ( 
//           null
//         )
//       }}
//       </BlobProvider>
//     );
//   }

  // street_address, city, state_or_province, postal_code, country)
  // needs to be customer[] or something in order to work with typescript stuff
  const customer = [
    {
      id: 'uuid7-1234',
      name: 'BLUE JIBRAN',
      inserted_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z',
      street_address: '5 Fake Street',
      city: 'Hamilton',
      state_or_province: 'Ontario',
      postal_code: 'M5V 3E7',
      country: 'Canada',
      members: [],
      member_count: 0,
      fuel_cards: [],
      card_count: 0,
    }
  ];

// Sample data for diesel fuel transactions
  // needs to be FuelCardTransaction[] or something in order to work with typescript stuff

const fuelCardTransactions = [
    {
      cardNumber: '1234 5678 9012 3456',
      driverName: 'John Doe',
      vehicleNumber: 'V123',
      date: '2024-07-01',
      stopCity: 'Los Angeles',
      quantity: 50,
      pricePerUnit: 3.5,
      tax: 0.28
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '2345 6789 0123 4567',
      driverName: 'Jane Smith',
      vehicleNumber: 'V124',
      date: '2024-07-02',
      stopCity: 'San Francisco',
      quantity: 60,
      pricePerUnit: 3.45,
      tax: 0.31
    },
    {
      cardNumber: '3456 7890 1234 5678',
      driverName: 'Alice Johnson',
      vehicleNumber: 'V125',
      date: '2024-07-03',
      stopCity: 'San Diego',
      quantity: 45,
      pricePerUnit: 3.55,
      tax: 0.27
    }
    // Add more transactions as needed
  ];
  
  // Calculate the total amount for each transaction
  const calculateTotal = (quantity, pricePerUnit, tax) => ((quantity * pricePerUnit) + tax);
  
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: '#FFFFFF'
    },
    header: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center'
    },
    paragraph: {
      fontSize: 15,
      margin: 5,
      textAlign: 'right'
    },
    table: {
      display: 'table',
      width: 'auto',
      margin: 'auto'
    },
    tableRow: {
      flexDirection: 'row'
    },
    tableCol: {
      width: '12.5%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#000'
    },
    tableCell: {
      margin: 5,
      fontSize: 10
    },
    total: {
      marginTop: 20,
      fontSize: 14,
      textAlign: 'right'
    }
  });
  
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice for Diesel Fuel Transactions</Text>
            <Text style={styles.tableCell}>Customer: {customer[0].name}</Text>
            <Text style={styles.tableCell}>Address: {customer[0].street_address}, {customer[0].city}, {customer[0].state_or_province}, {customer[0].postal_code}, {customer[0].country}</Text>
   
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Card #</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Driver Name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Vehicle #</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Date</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Stop City</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Qty (liters)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Price per Unit ($)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Tax ($)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Total ($)</Text>
            </View>
          </View>
          {fuelCardTransactions.map((fuelCardTransaction, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.cardNumber}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.driverName}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.vehicleNumber}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.date}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.stopCity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.pricePerUnit}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{fuelCardTransaction.tax}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{calculateTotal(fuelCardTransaction.quantity, fuelCardTransaction.pricePerUnit, fuelCardTransaction.tax)}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.total}>
          Grand Total: $
          {fuelCardTransactions
            .reduce((acc, fuelCardTransaction) => acc + fuelCardTransaction.quantity * fuelCardTransaction.pricePerUnit + fuelCardTransaction.tax, 0)
            }
        </Text>
      </Page>
    </Document>
  );

// const DownloadLink = () => (
//   <div>
//     <PDFDownloadLink document={<Document />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? 'Loading document...' : 'Download now!'
//       }
//     </PDFDownloadLink>
//   </div>
// );

  
export default App