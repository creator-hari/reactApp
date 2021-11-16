import logo from './logo.svg';
import './App.css';
import { CSVLink } from 'react-csv'
import generateCsvReport from './CsvExport';
import CsvComponent from './CsvComponent';
import { render } from '@testing-library/react';
import csvDownload from 'json-to-csv-export'

const data = [
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },
  { userName: "harish", uid: 1, userType: 1, mobile: "9658741364", secondName: "s", fullName: "harish s", ip: 29, email: "h@g.com", address: "vcxdgywscv", lastActive: 1636290190, },

];

// address: "Bangalore"
// email: "vinay@gmail.com"
// fullName: "Vinay"
// ip: "::1"
// lastActive: 1636290190
// mobile: "9658741364"
// uid: 1
// userName: "shadow"
// userType: 1
// const headers = [
//   { label: "First Name", key: "firstName" },
//   { label: "Second Name", key: "secondName" },
//   { label: "Age", key: "age" },
//   { label: "Email", key: "email" },
// ];

// const csvReport = {
//   filename: "report.csv",
//   headers: headers,
//   data: data,
// };

const headers = [
  { label: "Uid", key: "uid" },
  { label: "Full Name", key: "fullName" },
  { label: "User Name", key: "userName" },
  { label: "User Type", key: "userType" },
  { label: "Email", key: "email" },
  { label: "Mobile", key: "mobile" },
  { label: "Address", key: "address" },
  { label: "Last Active", key: "lastActive" },
  { label: "IP", key: "ip" },
];

const csvReport = generateCsvReport(data);

const handleExport = () => {
  csvDownload(data, "demo_export.csv", headers);

}


function App() {
  return (
    <div className="App">
      <CsvComponent handleExport={handleExport} />
      {/* <CSVLink {...csvReport}><button>Get csv</button></CSVLink> */}
    </div>
  );
}

export default App;
