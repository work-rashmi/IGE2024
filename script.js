document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const resultContainer = document.getElementById('resultContainer');

    // Example data (replace with your actual data handling logic)
    const data = [
       { Name: 'A.S. VEDESH', DOB: '02.06.2011', Grade: '8TH', School: 'SARASWATI VIDYALAYA', Prize: '3RD', Mobile: '9967937275' },
    { Name: 'AADIT SHANKAR MAITI', DOB: '05.04.2016', Grade: '3RD', School: 'Don Bosco Park', Prize: '1ST', Mobile: '9874463930' },
    { Name: 'AARAV JAGDISH LATKE', DOB: '25.06.2015', Grade: '4TH', School: 'SRI MA VIDYALAYA', Prize: '1ST', Mobile: '9892256496' },
    { Name: 'AARUSHI SINGH', DOB: '05.03.2012', Grade: '7TH', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '1ST', Mobile: '9029037022' },
    { Name: 'AARYA SHANKAR MAITI', DOB: '21.03.2011', Grade: '8TH', School: 'Don Bosco Park', Prize: '3RD', Mobile: '9874463930' },
    { Name: 'ABHIDNYA ABHISHEK MANE', DOB: '02.09.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLARS SCHOOL', Prize: '2ND', Mobile: '9819482655' },
    { Name: 'ADVIK AGGARWAL', DOB: '09.12.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLARS', Prize: 'CHAMPION', Mobile: '8283801238' },
    { Name: 'AKSHARA PRASHANT SHEWALE', DOB: '19.10.2017', Grade: '1ST', School: 'New Horizon Scholars School', Prize: '2ND', Mobile: '8779421045' },
    { Name: 'ANAISHA YADAV', DOB: '19.05.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLAR SCHOOL', Prize: '2ND', Mobile: '9820401477' },
    { Name: 'ANAYA CHAKRABORTY', DOB: '10.08.2018', Grade: 'SR.KG', School: 'NEW HORIZON SCHOOL', Prize: 'SUPER CHAMPION', Mobile: '9836401687' },
    { Name: 'ANVI PUNDALIK KANDOLCAR', DOB: '03.03.2015', Grade: '4TH', School: 'PODAR INTERNATIONAL SCHOOL THANE', Prize: '1ST', Mobile: '9833923383' },
    { Name: 'ARNAV PRASHANT ZADE', DOB: '25.02.2018', Grade: '1ST', School: 'SRI MA VIDYALAYA', Prize: 'SUPER CHAMPION', Mobile: '9766333075' },
    { Name: 'ARYA SOLANKI', DOB: '17.04.2018', Grade: '1ST', School: 'NHIS', Prize: '1ST', Mobile: '8767793192' },
    { Name: 'ASVI BHAVYA', DOB: '28.05.2015', Grade: '4TH', School: 'NARAYANA ETECHNO SCHOOL', Prize: '1ST', Mobile: '8369022084' },
    { Name: 'ATHARVA NOMUL', DOB: '30.12.2016', Grade: '3RD', School: 'EURO SCHOOL', Prize: '1ST', Mobile: '6263019338' },
    { Name: 'DARSHIL CHORGE', DOB: '16.04.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLAR SCHOOL AND NEOKIDS', Prize: '1ST', Mobile: '9870833924' },
    { Name: 'DEVANSH SETH', DOB: '12.12.2012', Grade: '6TH', School: 'PODAR INTERNATIONAL SCHOOL THANE', Prize: '2ND', Mobile: '8291207434' },
    { Name: 'DHANVEE NILESH KALAMBE', DOB: '05.05.2018', Grade: '1ST', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '2ND', Mobile: '9867624461' },
    { Name: 'ISHAAN YOGESH DESAI', DOB: '25.02.2015', Grade: '5TH', School: 'TANARATA INTERNATIONAL SCHOOL', Prize: 'CHAMPION', Mobile: '60179024162' },
    { Name: 'JIVESH DINANATH MANERA', DOB: '16.06.2014', Grade: '5TH', School: 'NEW HORIZON SCHOLARS SCHOOL', Prize: 'CHAMPION', Mobile: '9820738057' },
    { Name: 'KAIRA DAS', DOB: '06.06.2017', Grade: '2ND', School: 'PODAR INTERNATIONAL SCHOOL', Prize: 'CHAMPION', Mobile: '9930323621' },
    { Name: 'KIAARA PACHGADE', DOB: '27.03.2017', Grade: '2ND', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '3RD', Mobile: '8080388988' },
    { Name: 'MEHAL GOYAL', DOB: '15.01.2017', Grade: '2ND', School: 'APPLE GLOBAL SCHOOL', Prize: '3RD', Mobile: '7506195770' },
    { Name: 'MITIN NITIN BHAMBHANI', DOB: '21.08.2017', Grade: '2ND', School: 'Universal High School', Prize: '3RD', Mobile: '9860420718' },
    { Name: 'NIRMAYEE RAJESH MHATRE', DOB: '12.05.2017', Grade: '2ND', School: 'GAUTAM SINGHANIA SCHOOL', Prize: '3RD', Mobile: '9987332123' },
    { Name: 'NISHTHA JAIN', DOB: '28.06.2016', Grade: '3RD', School: 'NEW HORIZON', Prize: '3RD', Mobile: '7798770074' },
    { Name: 'RIDIT TALWAR', DOB: '02.12.2010', Grade: '8TH', School: 'HFS Thane', Prize: 'SUPER CHAMPION', Mobile: '9324963909' },
    { Name: 'RISHIKESH MANGRULKAR', DOB: '27.09.2018', Grade: '1ST', School: 'HIRANANDANI FOUNDATION SCHOOL THANE', Prize: '1ST', Mobile: '9970050153' },
    { Name: 'RUTVIJ CHARDE', DOB: '12.04.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLARS', Prize: '1ST', Mobile: '7574820462' },
    { Name: 'SASHANG AHIR', DOB: '12.02.2013', Grade: '6TH', School: 'UNIVERSAL HIGH SCHOOL', Prize: '1ST', Mobile: '9920265145' },
    { Name: 'SHIVAAY JOHRI', DOB: '13.11.2015', Grade: '3RD', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '1ST', Mobile: '9892753453' },
    { Name: 'SMIT CHAVAN', DOB: '27.01.2019', Grade: 'SRKG', School: '', Prize: '3RD', Mobile: '9833604414' },
    { Name: 'SPANDAN SATISH SOHANI', DOB: '04.08.2018', Grade: '1ST', School: 'CORNEL', Prize: '2ND', Mobile: '8097937843' },
    { Name: 'TANAY MATHUR', DOB: '12.11.2015', Grade: '3RD', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '1ST', Mobile: '8879830783' },
    { Name: 'VIAAN GHOLAP', DOB: '02.04.2018', Grade: '1ST', School: 'BIRALA BRAINAICS', Prize: 'SUPER CHAMPION', Mobile: '8484817044' },
    { Name: 'VIRRAJ SINGH SOKHI', DOB: '09.07.2017', Grade: '2ND', School: 'NEW HORIZON SCHOLAR SCHOOL', Prize: '3RD', Mobile: '8828024423' },
    { Name: 'VIVAAN VERMA', DOB: '11.12.2018', Grade: '1ST', School: 'NEW HORIZON INTERNATIONAL SCHOOL', Prize: '3RD', Mobile: '8104177202' },
    { Name: 'YUTIKA KHALI', DOB: '18.01.2015', Grade: '5TH', School: 'GAYATRI VIDYALAYA', Prize: '1ST', Mobile: '8657868656' },
];
    ];

    // Find student based on phone number input
    const student = data.find(student => student.mobile === phoneNumber);

    // Display result
    if (student) {
        resultContainer.innerHTML = `
            <h2>Student Result</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p><strong>School:</strong> ${student.school}</p>
            <p><strong>Standard:</strong> ${student.standard}</p>
            <p><strong>Medal:</strong> ${student.medal}</p>
        `;

        // Check if student gets a gold medal
        if (student.medal === 'Gold') {
            // Redirect to Facebook page for review
            alert('Congratulations! You have secured a GOLD MEDAL! \n You will be re-directed to the facebook page. Please give Rashmi Mam a review.');
             setTimeout(() => {
                window.location.href = 'https://www.facebook.com/eagerbeaverabacus/reviews'; // Replace with your Facebook page URL
            }, 10000); // 10 seconds delay
        }
    } else {
        resultContainer.innerHTML = '<p>Student not found. Please check the phone number.</p>';
    }
});
