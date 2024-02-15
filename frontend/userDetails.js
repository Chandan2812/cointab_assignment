document.addEventListener('DOMContentLoaded', () => {
    // Get userId from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    // Function to fetch user details
    async function fetchUserDetails(userId) {
        try {
            const response = await fetch(`https://cointab-mxqr.onrender.com/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const userData = await response.json();
            displayUserDetails(userData);
        } catch (error) {
            console.error('Error fetching user details:', error);
            alert('Failed to fetch user details');
        }
    }

    // Function to display user details on the page
    function displayUserDetails(userData) {
        const userDetailsContainer = document.getElementById('user-details-container');
        userDetailsContainer.innerHTML = `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
            <p><strong>Website:</strong> ${userData.website}</p>
            <p><strong>City:</strong> ${userData.city}</p>
            <p><strong>Company:</strong> ${userData.company}</p>
        `;
    }

    // Function to fetch user's posts
    async function fetchUserPosts(userId) {
        try {
            const response = await fetch(`https://cointab-mxqr.onrender.com/posts/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user posts');
            }
            const userPosts = await response.json();
            displayUserPosts(userPosts);
        } catch (error) {
            console.error('Error fetching user posts:', error);
            alert('Failed to fetch user posts');
        }
    }

    // Function to display user's posts on the page
    function displayUserPosts(userPosts) {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = `
            <h2>User Posts</h2>
            <ul>
                ${userPosts.map(post => `<li><strong>${post.title}</strong><br>${post.body}</li>`).join('')}
            </ul>
        `;
    }

    // Fetch user details and posts when the page loads
    fetchUserDetails(userId);
    fetchUserPosts(userId);
});





document.getElementById('bulk-add-btn').addEventListener('click', async () => {
    try {
        // Get userId from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');

        // Fetch user information for the current userId
        const userDataResponse = await fetch(`https://cointab-mxqr.onrender.com/users/${userId}`);
        if (!userDataResponse.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData = await userDataResponse.json();

        // Fetch posts for the current userId
        const postsResponse = await fetch(`https://cointab-mxqr.onrender.com/posts/${userId}`);
        if (!postsResponse.ok) {
            throw new Error('Failed to fetch posts');
        }
        const userPosts = await postsResponse.json();

        // Combine user data and posts
        const postData = {
            user: userData,
            posts: userPosts
        };

        // Send bulk add request to backend
        const response = await fetch('https://cointab-mxqr.onrender.com/posts/bulk-add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error('Failed to bulk add data');
        }
        alert("Data added successfully");
        // Show Download in Excel button and hide Bulk Add button
        document.getElementById('download-excel-btn').style.display = 'inline-block';
        document.getElementById('bulk-add-btn').style.display = 'none';
    } catch (error) {
        console.error('Error bulk adding data:', error);
        alert('Failed to bulk add data: ' + error.message);
    }
});



document.getElementById('download-excel-btn').addEventListener('click', async () => {
    try {
        // Get userId from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        
        // Trigger the download by navigating to the download endpoint
        window.location.href = `https://cointab-mxqr.onrender.com/posts/download-excel/${userId}`;
    } catch (error) {
        console.error('Error downloading Excel file:', error);
        alert('Failed to download Excel file');
    }
});
