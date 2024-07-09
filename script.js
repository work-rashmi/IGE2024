document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const resultContainer = document.getElementById('resultContainer');

    // Example data (replace with your actual data handling logic)
    const data = [
        { name: 'Yutika Khali', grade: 'A11', school: 'New Horizon Scholars School', standard: '5th', medal: 'Gold', mobile: '8439304241' },
        { name: 'Kaira Das', grade: 'A10', school: 'Podar International School', standard: '2nd', medal: 'Gold', mobile: '9930323621' },
        { name: 'Darshil Rupesh Chorge', grade: 'M12', school: 'New Horizon Neo Kids and Scholar School', standard: '2nd', medal: 'Gold', mobile: '9870833924' },
        { name: 'Rehan Abdul Munir Shaikh', grade: 'A12', school: 'Saraswati Vidyalaya', standard: '6th', medal: 'Gold', mobile: '9820828047' },
        { name: 'Samruddhi Sharad Vhasakeri', grade: 'A12', school: 'Hiranandani Foundation School', standard: '3rd', medal: 'Gold', mobile: '9137083170' },
        { name: 'Ritika Manish Katira', grade: 'A11', school: 'New Horizon International School', standard: '3rd', medal: 'Gold', mobile: '9321259967' },
        { name: 'Dhanvee Nilesh Kalambe', grade: 'A12', school: 'Hiranandani Foundation School Thane', standard: '1st', medal: 'Gold', mobile: '9867624461' },
        { name: 'Sashang Ahir', grade: 'M5', school: 'Universal High School', standard: '6th', medal: 'Silver', mobile: '9769632957' },
        { name: 'Kanav Patwal', grade: 'M8', school: 'New Horizon Scholars School', standard: '4th', medal: 'Gold', mobile: '8108330001' },
        { name: 'Asvi Bhavya', grade: 'M5', school: 'Narayana E Techno School', standard: '4th', medal: 'Silver', mobile: '8369022084' },
        { name: 'Akshara Prashant Shewale', grade: 'M12', school: 'New Horizon Scholars School', standard: '1st', medal: 'Gold', mobile: '8779421045' },
        { name: 'Advik Aggarwal', grade: 'A12', school: 'New Horizon Scholars School', standard: '2nd', medal: 'Gold', mobile: '8283801238' },
        { name: 'Aarav Chauhan', grade: 'M9', school: 'Hiranandani Foundation School', standard: '3rd', medal: 'Gold', mobile: '9892560984' },
        { name: 'Priyanshu Mukhopadhyay', grade: 'A12', school: 'New Horizon Scholar School', standard: '3rd', medal: 'Gold', mobile: '9932026587' },
        { name: 'Vania Arya', grade: 'A8', school: 'New Horizon International School Rodas', standard: '3rd', medal: 'Gold', mobile: '9619480365' },
        { name: 'Shravya Nikhil Zope', grade: 'A10', school: 'New Horizon Scholars School Rodas', standard: '2nd', medal: 'Gold', mobile: '9167560193' },
        { name: 'Miraya Gupta', grade: 'A12', school: 'Hiranandani Foundation School', standard: '3rd', medal: 'Gold', mobile: '7506262018' },
        { name: 'Ayaan Agarwal', grade: 'M11', school: 'Universal High School', standard: '3rd', medal: 'Gold', mobile: '8884493006' },
        { name: 'Nihitha Putchkayala', grade: 'M5', school: 'Hiranandani Foundation School', standard: '6th', medal: 'Bronze', mobile: '9320471252' },
        { name: 'Devansh Seth', grade: 'M6', school: 'Podar International School Thane West', standard: '6th', medal: 'Gold', mobile: '9320017271' },
        { name: 'Aryaraj Rajak', grade: 'A8', school: 'New Horizon Scholar School', standard: '2nd', medal: 'Silver', mobile: '9564800021' },
        { name: 'Spandan Satish Sohani', grade: 'A12', school: 'Da Vincis International School', standard: '1st', medal: 'Gold', mobile: '8097937843' },
        { name: 'Rutvij Sarang Charde', grade: 'A12', school: 'New Horizon Scholars School', standard: '2nd', medal: 'Gold', mobile: '7574820462' },
        { name: 'Arnav Prashant Zade', grade: 'A12', school: 'Sri Ma Vidyalaya', standard: '1st', medal: 'Gold', mobile: '9766333075' },
        { name: 'Virraj Singh Sokhi', grade: 'A12', school: 'New Horizon Scholars School', standard: '2nd', medal: 'Gold', mobile: '8828024423' },
        { name: 'Venkata Rohith Reddy Bikkam', grade: 'M5', school: 'Northwest Rankin Middle School', standard: '7th', medal: 'Gold', mobile: '6019558813' },
        { name: 'Venkata Hemanth Reddy Bikkam', grade: 'M5', school: 'Northwest Rankin Elementary School', standard: '4th', medal: 'Gold', mobile: '6013457467' },
        { name: 'Mitin Nitin Bhambhani', grade: 'A12', school: 'Universal High School', standard: '2nd', medal: 'Gold', mobile: '9920498099' },
        { name: 'Kriti Kodumuri', grade: 'M5', school: 'Gulledge Elementary School', standard: '5th', medal: 'Gold', mobile: '4699828600' },
        { name: 'Riaan Chandarana', grade: 'M4', school: 'Hiranandani Foundation School Thane', standard: '3rd', medal: 'Gold', mobile: '9953556116' },
        { name: 'Abhidnya Abhishek Mane', grade: 'A12', school: 'New Horizon Scholars School', standard: '2nd', medal: 'Gold', mobile: '9819482655' },
        { name: 'Ananya Anand', grade: 'M9', school: 'Euro School Thane', standard: '4th', medal: 'Gold', mobile: '8879343943' },
        { name: 'Kriti Kodumuri', grade: 'M3', school: 'New Horizon Scholars School', standard: '5th', medal: 'Gold', mobile: '9820738057' },
        { name: 'Viaan Vinod Gholap', grade: 'A9', school: 'Sri Ma Vidyalaya', standard: '1st', medal: 'Gold', mobile: '8484817044' },
        { name: 'Sai Kartikeya Bhimaraju', grade: 'M5', school: 'Alton Boyd Elementary', standard: '5th', medal: 'Silver', mobile: '4699295776' },
        { name: 'Aarushi Singh', grade: 'M9', school: 'Hiranandani Foundation School', standard: '7th', medal: 'Gold', mobile: '9029037022' },
        { name: 'Ishaan Yogesh Desai', grade: 'A6', school: 'Tanarata International School', standard: '4th', medal: 'Silver', mobile: '1111311906' },
        { name: 'Ridit Talwar', grade: 'M4', school: 'Hiranandani Foundation School', standard: '8th', medal: 'Gold', mobile: '9619673090' }
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
