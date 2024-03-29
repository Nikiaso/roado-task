interface UserLogin {
    userId: string;
    logged_in: Date;
    logged_out: Date;
    lastSeenAt: Date;
}

// Function to calculate distinct count of active users for a given month
function calculateDistinctActiveUsers(userLogins: UserLogin[]): number {
    const activeUsersSet = new Set<string>();

    userLogins.forEach((login) => {
        // Check if the user is active based on the duration criteria (e.g., 6 months)
        const duration = login.logged_out.getTime() - login.logged_in.getTime();
        if (duration > 6 * 30 * 24 * 60 * 60 * 1000) {
            activeUsersSet.add(login.userId);
        }
    });

    return activeUsersSet.size;
}
