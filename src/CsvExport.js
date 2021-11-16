
const generateCsvReport = (data) => {
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

    return {
        filename: "report.csv",
        headers: headers,
        data: data,
    };
}

export default generateCsvReport;


// address: "Bangalore"
// email: "vinay@gmail.com"
// fullName: "Vinay"
// ip: "::1"
// lastActive: 1636290190
// mobile: "9658741364"
// uid: 1
// userName: "shadow"
// userType: 1