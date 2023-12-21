import DataTable from '../components/Datatable';
import Background from '../assets/images/blackandwhite.jpeg';

function Dashboard() {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;

