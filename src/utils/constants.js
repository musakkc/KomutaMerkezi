export const MAP_CENTER = [39.925, 32.866]; // Ankara merkez
export const MAP_ZOOM = 6;

// Hasar Tipleri ve Renkleri
export const DAMAGE_TYPES = {
  CRITICAL: { label: 'Kritik Hasar', color: '#dc2626', icon: '🔴' },
  HIGH: { label: 'Yüksek Hasar', color: '#ea580c', icon: '🟠' },
  MEDIUM: { label: 'Orta Hasar', color: '#f59e0b', icon: '🟡' },
  LOW: { label: 'Düşük Hasar', color: '#22c55e', icon: '🟢' },
  INSPECTION: { label: 'İnceleme Gerekli', color: '#3b82f6', icon: '🔵' }
};

// Ekip Durumları
export const TEAM_STATUS = {
  AVAILABLE: { label: 'Hazır', color: '#22c55e' },
  ON_ROUTE: { label: 'Yolda', color: '#f59e0b' },
  ON_DUTY: { label: 'Görevde', color: '#3b82f6' },
  BUSY: { label: 'Meşgul', color: '#dc2626' }
};

// Örnek Hasar Verileri (İhalelerden gelen görüntü analizleri)
export const MOCK_DAMAGES = [
  {
    id: 1,
    title: 'Ankara-Istanbul Otoyolu Km 145',
    type: 'CRITICAL',
    location: [40.1885, 29.0610],
    description: 'Yol yüzeyinde derin çatlaklar ve çökmeler tespit edildi',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    detectedDate: '2025-10-10',
    assignedTeam: 'Ekip A',
    priority: 1
  },
  {
    id: 2,
    title: 'İzmir Çevre Yolu Km 23',
    type: 'HIGH',
    location: [38.4237, 27.1428],
    description: 'Asfalt tabakasında orta seviye bozulmalar',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    detectedDate: '2025-10-12',
    assignedTeam: 'Ekip B',
    priority: 2
  },
  {
    id: 3,
    title: 'Antalya D400 Km 78',
    type: 'MEDIUM',
    location: [36.8969, 30.7133],
    description: 'Banket kenarında erozyonlar gözlemlendi',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    detectedDate: '2025-10-13',
    assignedTeam: null,
    priority: 3
  },
  {
    id: 4,
    title: 'Bursa-Ankara Yolu Km 234',
    type: 'LOW',
    location: [40.1826, 32.3448],
    description: 'Yüzeysel çatlaklar mevcut',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    detectedDate: '2025-10-14',
    assignedTeam: 'Ekip C',
    priority: 4
  },
  {
    id: 5,
    title: 'Adana Çevre Yolu Km 12',
    type: 'INSPECTION',
    location: [37.0000, 35.3213],
    description: 'Drenaj sisteminde tıkanıklık şüphesi',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    detectedDate: '2025-10-15',
    assignedTeam: null,
    priority: 5
  },
  {
    id: 6,
    title: 'Konya-Karaman Yolu Km 56',
    type: 'CRITICAL',
    location: [37.5833, 33.2833],
    description: 'Köprü yapısında çatlak ve sarkma tespit edildi',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    detectedDate: '2025-10-09',
    assignedTeam: 'Ekip A',
    priority: 1
  },
  {
    id: 7,
    title: 'Trabzon Sahil Yolu Km 8',
    type: 'HIGH',
    location: [41.0015, 39.7178],
    description: 'Deniz etkisiyle beton korozyonu',
    imageUrl: 'https://picsum.photos/400/300?random=7',
    detectedDate: '2025-10-11',
    assignedTeam: null,
    priority: 2
  }
];

// Örnek Ekip Verileri
export const MOCK_TEAMS = [
  { id: 1, name: 'Ekip A', status: 'ON_ROUTE', currentLocation: [40.1885, 29.0610] },
  { id: 2, name: 'Ekip B', status: 'ON_DUTY', currentLocation: [38.4237, 27.1428] },
  { id: 3, name: 'Ekip C', status: 'AVAILABLE', currentLocation: [39.925, 32.866] }
];
