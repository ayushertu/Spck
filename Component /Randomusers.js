function RandomUsers() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user, index) => (
          <div key={index} style={{ marginBottom: '15px', border: '1px solid #ddd', padding: '10px' }}>
            <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
            <p>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}