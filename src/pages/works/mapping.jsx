{
  tanques.map((item) => (
    // Fixed: Added a return statement by using parentheses instead of curly braces
    // Also added a key prop which is required for lists in React
    <div className="flex-c flex-center" key={item.id}>
      {/* <img src={item.url} alt={`Tanque ${item.id}`} /> */}
      <div style={{ color: "#000" }}>{item.url}</div>
    </div>
  ));
}
