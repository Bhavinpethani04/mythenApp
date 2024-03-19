// dummy Data
export const appData = [
  {
    insured: 'Mr Jack',
    address: '31 Troy Street',
    limit: 300,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.65107, lng: -79.347015 },
    isSelected: false,
  },
  {
    insured: 'Mr Devil',
    address: '31 Larnch Street',
    limit: 500,
    status: 'quoted',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.2557, lng: -79.8711 },
    isSelected: false,
  },
  {
    insured: 'Mr Ben',
    address: '31 Block Street',
    limit: 3000,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.8975, lng: -78.9427 },
    isSelected: false,
  },
  {
    insured: 'Mr Bunny',
    address: '31 Sims Street',
    limit: 200,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 45.4215, lng: -75.6919 },
    isSelected: false,
  },
  {
    insured: 'Mr Hejan',
    address: '31 Lester Street',
    limit: 360,
    status: 'renewal',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.7417, lng: -79.3733 },
    isSelected: false,
  },
  {
    insured: 'Mr Milan',
    address: '31 Troy Street',
    limit: 300,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 44.2312, lng: -76.486 },
    isSelected: false,
  },
  {
    insured: 'Mr Parth',
    address: '31 Larnch Street',
    limit: 500,
    status: 'active',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.2501, lng: -79.8663 },
    isSelected: false,
  },
  {
    insured: 'Mr Nehil',
    address: '31 Block Street',
    limit: 3000,
    status: 'active',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.5448, lng: -80.2482 },
    isSelected: false,
  },
  {
    insured: 'Mr Hiren',
    address: '31 Sims Street',
    limit: 200,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 43.4643, lng: -80.5204 },
    isSelected: false,
  },
  {
    insured: 'Mr Shivam',
    address: '31 Lester Street',
    limit: 360,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 44.4183633, lng: -80.4697557 },
    isSelected: false,
  },
  {
    insured: 'Mr Satyam',
    address: '31 Lester Street',
    limit: 360,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 45.4183633, lng: -80.4697557 },
    isSelected: false,
  },
  {
    insured: 'Mr Harsh',
    address: '31 Lester Street',
    limit: 360,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 46.4183633, lng: -80.4697557 },
    isSelected: false,
  },
  {
    insured: 'Ms Jansen',
    address: '31 Lester Street',
    limit: 360,
    status: 'panding',
    renewalDate: '12/02/2025',
    feedback: 'N/A',
    latLong: { lat: 47.4183633, lng: -80.4697557 },
    isSelected: false,
  },
];

// filter attirubute array for status
export const statusFilter = [
  {
    isSelected : false,
    title : 'All'
  },
  {
    isSelected : true,
    title : 'Active'
  },
  {
    isSelected : false,
    title : 'Quoted'
  },
  {
    isSelected : false,
    title : 'Quoted Pending'
  },
  {
    isSelected : true,
    title : 'Upcoming Renewal'
  }
]

// filter attirubute array for renewal date
export const renewalDateFilter = [
  {
    isSelected : true,
    title : 'All'
  },
  {
    isSelected : true,
    title : 'Within 1 week'
  },
  {
    isSelected : false,
    title : 'Within 1 month'
  },
  {
    isSelected : false,
    title : 'within 3 months'
  },
  {
    isSelected : true,
    title : 'within 6 months'
  }
]