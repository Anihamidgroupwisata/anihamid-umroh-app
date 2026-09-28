import { Link, Navigate, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'anihamid_state_v1';
const ADMIN_SESSION_KEY = 'anihamid_admin_session';

const defaultSite = {
  company: 'PT. ANIHAMID GROUP WISATA',
  welcome: 'Assalamu’alaikum, Tamu Allah',
  headline: 'Selamat Datang di PT. ANIHAMID GROUP WISATA',
  tagline: 'Memberikan Pelayanan Yang Terbaik Dengan Sepenuh Hati',
  banner: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
  logo: '/logo.svg',
  about:
    'PT. ANIHAMID GROUP WISATA hadir untuk memberikan pelayanan ibadah yang amanah, nyaman, dan professional bagi jamaah yang ingin menunaikan ibadah umroh serta haji dengan pengalaman perjalanan yang terorganisir.',
  address: 'Jl. Raya No. 123, Kota Bandung, Jawa Barat',
  whatsapp: '6281234567890',
  instagram: '@anihamidgroupwisata',
  facebook: 'Anihamid Group Wisata',
  legal: 'Legalitas perusahaan dapat diperbarui secara berkala oleh admin sesuai dokumen aktif yang berlaku.',
  gallery: [
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
  ],
  services: [
    'Pelayanan umroh dan haji terpercaya',
    'Bimbingan ibadah dan manasik',
    'Agen dan tour leader terkoordinasi',
    'Dokumentasi perjalanan dan fasilitas lengkap',
  ],
  privacyText:
    'Kebijakan privasi ini menjelaskan bagaimana data pendaftaran dan komunikasi jamaah diproses untuk kebutuhan administrasi, konfirmasi paket, serta tindak lanjut perjalanan.',
  terms: 'Syarat pendaftaran dapat diperbarui admin berdasarkan ketentuan layanan aktif.',
};

const defaultPackages = [
  {
    id: 'umroh-30-hari',
    name: 'Umroh Plus 30 Hari',
    departureDate: '2026-04-12',
    duration: '30 Hari',
    departureCity: 'Jakarta',
    priceFrom: 28900000,
    roomType: 'Twin Sharing',
    airline: 'Garuda Indonesia',
    hotel: 'Hotel Mekkah / Madinah pilihan utama',
    facilities: ['Visa', 'Transportasi', 'Konsumsi', 'Manasik'],
    status: 'Tersedia',
    brochure: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80',
    details: 'Paket umroh dengan durasi 30 hari, hotel strategis, dan pembimbing ibadah untuk kenyamanan perjalanan.',
    itinerary: ['Persiapan berangkat', 'Mekkah 10 hari', 'Madinah 14 hari', 'City tour'],
    dp: 'DP mulai 5 juta',
    requirements: 'Membawa dokumen identitas dan mengikuti prosedur pendaftaran setelah konfirmasi.',
    included: ['Tiket pesawat', 'Visa', 'Hotel', 'Bus / transportasi', 'Konsumsi', 'Manasik'],
    excluded: ['Perlengkapan pribadi', 'Pembelian suvenir', 'Tambahan city tour pilihan'],
  },
  {
    id: 'umroh-14-hari',
    name: 'Umroh Reguler 14 Hari',
    departureDate: '2026-05-02',
    duration: '14 Hari',
    departureCity: 'Bandung',
    priceFrom: 21900000,
    roomType: 'Triple Sharing',
    airline: 'Lion Air',
    hotel: 'Hotel dekat Masjid Nabawi',
    facilities: ['Visa', 'Transportasi', 'Konsumsi'],
    status: 'Tersedia',
    brochure: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
    details: 'Paket hemat untuk jamaah yang ingin menunaikan umroh dengan jadwal singkat dan fasilitas sesuai kebutuhan.',
    itinerary: ['Persiapan', 'Madinah 5 hari', 'Mekkah 9 hari'],
    dp: 'DP mulai 4 juta',
    requirements: 'Persyaratan berkas dapat dilengkapi saat proses tindak lanjut admin.',
    included: ['Tiket pesawat', 'Visa', 'Hotel', 'Konsumsi'],
    excluded: ['Perlengkapan tambahan', 'Tour tambahan'],
  },
  {
    id: 'haji-plus',
    name: 'Haji Plus',
    departureDate: '2026-06-18',
    duration: '40 Hari',
    departureCity: 'Surabaya',
    priceFrom: 89900000,
    roomType: 'Double Sharing',
    airline: 'Saudi Arabian Airlines',
    hotel: 'Hotel pilihan Haji Plus',
    facilities: ['Visa', 'Hotel', 'Transportasi', 'Konsumsi'],
    status: 'Tunggu Konfirmasi',
    brochure: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    details: 'Program perjalanan haji dan umroh dengan layanan yang terarah dan pendampingan ibadah.',
    itinerary: ['Seleksi administrasi', 'Keberangkatan', 'Amanah layanan di Arab Saudi'],
    dp: 'DP sesuai ketentuan',
    requirements: 'Persyaratan dapat diperbarui sesuai kebijakan penyelenggara.',
    included: ['Tiket pesawat', 'Visa', 'Hotel', 'Transportasi'],
    excluded: ['Belum termasuk perlengkapan khusus', 'Biaya tambahan luar paket'],
  },
];

const defaultAgents = [
  { id: 'AG-1001', name: 'Agen Rahmat', code: 'AR2026', phone: '62811223344', status: 'Aktif', notes: 'Agen fokus wilayah Jawa Barat' },
  { id: 'AG-1002', name: 'Agen Nadia', code: 'ND2026', phone: '62899887766', status: 'Aktif', notes: 'Agen fokus wilayah Jakarta' },
  { id: 'AG-1003', name: 'Agen Fajar', code: 'FJ2026', phone: '62876543210', status: 'Aktif', notes: 'Agen fokus wilayah Jawa Timur' },
];

const defaultAdmin = { username: 'admin', password: 'anihamid123' };

function generateRegistrationCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'AH';
  for (let i = 0; i < 6; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value || 0);
}

function getInitialData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { site: defaultSite, packages: defaultPackages, agents: defaultAgents, registrations: [], admin: defaultAdmin };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      site: { ...defaultSite, ...(parsed.site || {}) },
      packages: parsed.packages && parsed.packages.length ? parsed.packages : defaultPackages,
      agents: parsed.agents && parsed.agents.length ? parsed.agents : defaultAgents,
      registrations: parsed.registrations || [],
      admin: { ...defaultAdmin, ...(parsed.admin || {}) },
    };
  } catch (error) {
    return { site: defaultSite, packages: defaultPackages, agents: defaultAgents, registrations: [], admin: defaultAdmin };
  }
}

function App() {
  const [appState, setAppState] = useState(getInitialData);
  const [adminSession, setAdminSession] = useState(() => localStorage.getItem(ADMIN_SESSION_KEY) === 'true');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  }, [appState]);

  useEffect(() => {
    localStorage.setItem(ADMIN_SESSION_KEY, String(adminSession));
  }, [adminSession]);

  const updateAppState = (updater) => setAppState((prev) => updater(prev));

  return (
    <Routes>
      <Route path="/" element={<PublicHome appState={appState} />} />
      <Route path="/paket" element={<PackagesPage appState={appState} />} />
      <Route path="/paket/:packageId" element={<PackageDetailPage appState={appState} />} />
      <Route path="/daftar" element={<PublicRegistration appState={appState} onSubmitRegistration={(data) => updateAppState((prev) => ({ ...prev, registrations: [data, ...prev.registrations] }))} />} />
      <Route path="/bantuan" element={<HelpPage appState={appState} />} />
      <Route path="/login-petugas" element={<LoginPetugas appState={appState} adminSession={adminSession} setAdminSession={setAdminSession} />} />
      <Route path="/admin" element={<AdminDashboard appState={appState} adminSession={adminSession} setAdminSession={setAdminSession} updateAppState={updateAppState} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function PublicHome({ appState }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo" />
        </div>
        <div className="topbar-actions">
          <button className="button secondary" onClick={() => (window.location.href = '/login-petugas')}>
            Login Petugas
          </button>
        </div>
      </header>

      <main className="public-page">
        <section className="hero section-card" style={{ backgroundImage: `linear-gradient(rgba(11,11,11,0.52), rgba(11,11,11,0.72)), url(${appState.site.banner})` }}>
          <div className="hero-content">
            <p className="eyebrow">{appState.site.welcome}</p>
            <h1>{appState.site.headline}</h1>
            <p className="hero-tagline">{appState.site.tagline}</p>
            <div className="hero-actions">
              <Link className="button primary" to="/paket">Lihat Paket Umroh</Link>
              <Link className="button accent" to="/daftar">Daftar Sekarang</Link>
              <a className="button ghost" href={`https://wa.me/${appState.site.whatsapp}?text=${encodeURIComponent('Halo Anihamid, saya ingin bertanya tentang paket umroh.')}`} target="_blank" rel="noreferrer">
                Hubungi Admin
              </a>
            </div>
          </div>
        </section>

        <nav className="bottom-nav" aria-label="Navigasi bawah">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/paket">Paket</NavLink>
          <NavLink to="/daftar">Daftar</NavLink>
          <NavLink to="/bantuan">Bantuan</NavLink>
        </nav>

        <section className="info-block section-card">
          <h2>Tentang Anihamid</h2>
          <div className="about-grid">
            <div>
              <p>{appState.site.about}</p>
              <ul className="check-list">
                {appState.site.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="meta-box">
              <p><strong>Alamat:</strong> {appState.site.address}</p>
              <p><strong>WhatsApp:</strong> {appState.site.whatsapp}</p>
              <p><strong>Instagram:</strong> {appState.site.instagram}</p>
              <p><strong>Facebook:</strong> {appState.site.facebook}</p>
              <p><strong>Legalitas:</strong> {appState.site.legal}</p>
            </div>
          </div>
        </section>

        <section className="gallery-block section-card">
          <h2>Galeri Perjalanan</h2>
          <div className="gallery-grid">
            {appState.site.gallery.map((src, index) => (
              <img key={src + index} src={src} alt={`Galeri Anihamid ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="packages-block">
          <div className="section-title-row">
            <h2>Paket Umroh &amp; Haji</h2>
            <Link className="button tertiary" to="/paket">Lihat Semua Paket</Link>
          </div>
          <div className="package-grid">
            {appState.packages.map((pkg) => (
              <article className="package-card" key={pkg.id}>
                <img src={pkg.brochure} alt={pkg.name} />
                <div className="package-body">
                  <span className="status-badge">{pkg.status}</span>
                  <h3>{pkg.name}</h3>
                  <p><strong>Keberangkatan:</strong> {pkg.departureDate}</p>
                  <p><strong>Durasi:</strong> {pkg.duration}</p>
                  <p><strong>Harga mulai:</strong> {formatCurrency(pkg.priceFrom)}</p>
                  <p><strong>Kamar:</strong> {pkg.roomType}</p>
                  <div className="package-actions">
                    <Link className="button tertiary small" to={`/paket/${pkg.id}`}>Lihat Detail</Link>
                    <Link className="button primary small" to={`/daftar?package=${pkg.id}`}>Daftar Paket Ini</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function PackagesPage({ appState }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo" />
        </div>
        <div className="topbar-actions">
          <Link className="button secondary" to="/">Beranda</Link>
        </div>
      </header>

      <main className="content-page">
        <section className="section-card package-page-header">
          <h1>Daftar Paket</h1>
          <p>Informasi paket dan jadwal akan mengikuti data yang disimpan oleh admin secara berkala.</p>
        </section>

        <div className="package-list">
          {appState.packages.map((pkg) => (
            <article className="package-detail-card" key={pkg.id}>
              <img src={pkg.brochure} alt={pkg.name} />
              <div className="detail-copy">
                <span className="status-badge">{pkg.status}</span>
                <h2>{pkg.name}</h2>
                <p><strong>Keberangkatan:</strong> {pkg.departureDate}</p>
                <p><strong>Durasi:</strong> {pkg.duration}</p>
                <p><strong>Kota keberangkatan:</strong> {pkg.departureCity}</p>
                <p><strong>Harga mulai:</strong> {formatCurrency(pkg.priceFrom)}</p>
                <p><strong>Maskapai:</strong> {pkg.airline}</p>
                <p><strong>Hotel:</strong> {pkg.hotel}</p>
                <div className="package-actions">
                  <Link className="button tertiary" to={`/paket/${pkg.id}`}>Lihat Detail</Link>
                  <Link className="button primary" to={`/daftar?package=${pkg.id}`}>Daftar Paket Ini</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

function PackageDetailPage({ appState }) {
  const { packageId } = useParams();
  const pkg = appState.packages.find((item) => item.id === packageId);

  if (!pkg) return <Navigate to="/paket" replace />;

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo" />
        </div>
        <div className="topbar-actions">
          <Link className="button secondary" to="/paket">Kembali</Link>
        </div>
      </header>

      <main className="content-page">
        <section className="section-card package-detail-page">
          <img className="detail-brochure" src={pkg.brochure} alt={pkg.name} />
          <div className="detail-main">
            <span className="status-badge">{pkg.status}</span>
            <h1>{pkg.name}</h1>
            <p>{pkg.details}</p>
            <div className="detail-metrics">
              <span>Keberangkatan: {pkg.departureDate}</span>
              <span>Durasi: {pkg.duration}</span>
              <span>Harga mulai: {formatCurrency(pkg.priceFrom)}</span>
              <span>Room: {pkg.roomType}</span>
            </div>
            <div className="package-actions">
              <Link className="button primary" to={`/daftar?package=${pkg.id}`}>Daftar Paket Ini</Link>
            </div>
          </div>
        </section>

        <section className="section-card detail-grid">
          <div>
            <h3>Itinerary</h3>
            <ul>
              {pkg.itinerary.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>Fasilitas</h3>
            <ul>
              {pkg.included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section-card detail-grid">
          <div>
            <h3>Belum Termasuk</h3>
            <ul>
              {pkg.excluded.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>Ketentuan</h3>
            <p><strong>DP:</strong> {pkg.dp}</p>
            <p><strong>Syarat:</strong> {pkg.requirements}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function PublicRegistration({ appState, onSubmitRegistration }) {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const defaultPackageId = query.get('package') || appState.packages[0]?.id;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    domicile: '',
    gender: 'Laki-laki',
    birthDate: '',
    address: '',
    email: '',
    packageId: defaultPackageId,
    departureDate: '',
    roomType: '',
    participantCount: '1',
    notes: '',
    agentMode: 'select_active',
    selectedAgentId: '',
    manualAgentName: '',
    agentRefCode: '',
    consent: false,
    source: 'Public Dashboard',
  });

  const selectedPackage = appState.packages.find((pkg) => pkg.id === formData.packageId) || appState.packages[0];

  useEffect(() => {
    if (selectedPackage && !formData.departureDate) {
      setFormData((prev) => ({ ...prev, departureDate: selectedPackage.departureDate, roomType: prev.roomType || selectedPackage.roomType }));
    }
  }, [selectedPackage, formData.departureDate]);

  useEffect(() => {
    const code = formData.agentRefCode.trim();
    if (!code) return;
    const matched = appState.agents.find((agent) => agent.code.toLowerCase() === code.toLowerCase());
    if (matched) {
      setFormData((prev) => ({ ...prev, selectedAgentId: matched.id, agentMode: 'select_active', manualAgentName: '' }));
    }
  }, [formData.agentRefCode, appState.agents]);

  const nextStep = () => setStep((current) => Math.min(current + 1, 4));
  const prevStep = () => setStep((current) => Math.max(current - 1, 1));

  const handleField = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.whatsapp || !formData.domicile) return false;
    }
    if (step === 2) {
      if (!formData.packageId || !formData.departureDate) return false;
    }
    if (step === 3) {
      if (formData.agentMode === 'select_active' && !formData.selectedAgentId) return false;
      if (formData.agentMode === 'manual' && !formData.manualAgentName) return false;
    }
    if (step === 4) {
      if (!formData.consent) return false;
    }
    return true;
  };

  const submitRegistration = () => {
    if (!validateStep()) return;

    const selectedAgent = appState.agents.find((agent) => agent.id === formData.selectedAgentId);
    const registration = {
      id: crypto.randomUUID(),
      code: generateRegistrationCode(),
      fullName: formData.fullName,
      whatsapp: formData.whatsapp,
      packageId: formData.packageId,
      packageName: selectedPackage?.name || 'Paket belum dipilih',
      departureDate: formData.departureDate,
      roomType: formData.roomType,
      participantCount: Number(formData.participantCount || 1),
      notes: formData.notes,
      agent: selectedAgent ? selectedAgent.name : formData.agentMode === 'manual' ? 'Agen menunggu verifikasi' : 'Belum ada agen',
      agentId: selectedAgent ? selectedAgent.id : null,
      source: formData.source,
      status: 'Baru',
      createdAt: new Date().toISOString(),
    };

    onSubmitRegistration(registration);
    navigate('/?success=true');
  };

  const selectedAgentDisplay = useMemo(() => {
    if (formData.agentMode === 'select_active') {
      const agent = appState.agents.find((item) => item.id === formData.selectedAgentId);
      return agent ? agent.name : 'Pilih nama agen';
    }
    if (formData.agentMode === 'manual') {
      return formData.manualAgentName || 'Agen menunggu verifikasi';
    }
    return 'Saya belum memiliki agen';
  }, [appState.agents, formData.agentMode, formData.manualAgentName, formData.selectedAgentId]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo" />
        </div>
        <div className="topbar-actions">
          <Link className="button secondary" to="/">Beranda</Link>
        </div>
      </header>

      <main className="content-page form-page">
        <div className="section-card register-card">
          <div className="wizard-header">
            <h1>Formulir Pendaftaran</h1>
            <div className="step-indicator">
              <span className={step === 1 ? 'active' : ''}>1</span>
              <span className={step === 2 ? 'active' : ''}>2</span>
              <span className={step === 3 ? 'active' : ''}>3</span>
              <span className={step === 4 ? 'active' : ''}>4</span>
            </div>
          </div>

          {step === 1 && (
            <div className="form-grid">
              <label>
                Nama lengkap sesuai identitas <span>*</span>
                <input value={formData.fullName} onChange={(e) => handleField('fullName', e.target.value)} placeholder="Nama lengkap" />
              </label>
              <label>
                Nomor WhatsApp aktif <span>*</span>
                <input value={formData.whatsapp} onChange={(e) => handleField('whatsapp', e.target.value)} placeholder="62812..." />
              </label>
              <label>
                Kota/Kabupaten domisili <span>*</span>
                <input value={formData.domicile} onChange={(e) => handleField('domicile', e.target.value)} placeholder="Kota/Kabupaten" />
              </label>
              <label>
                Jenis kelamin
                <select value={formData.gender} onChange={(e) => handleField('gender', e.target.value)}>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </label>
              <label>
                Tanggal lahir
                <input type="date" value={formData.birthDate} onChange={(e) => handleField('birthDate', e.target.value)} />
              </label>
              <label>
                Email (opsional)
                <input value={formData.email} onChange={(e) => handleField('email', e.target.value)} placeholder="nama@email.com" />
              </label>
              <label className="full-width">
                Alamat lengkap
                <textarea value={formData.address} onChange={(e) => handleField('address', e.target.value)} placeholder="Alamat lengkap" rows="3" />
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="form-grid">
              <label>
                Paket yang diminati <span>*</span>
                <select value={formData.packageId} onChange={(e) => handleField('packageId', e.target.value)}>
                  {appState.packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Tanggal keberangkatan <span>*</span>
                <input type="date" value={formData.departureDate} onChange={(e) => handleField('departureDate', e.target.value)} />
              </label>
              <label>
                Tipe kamar
                <select value={formData.roomType} onChange={(e) => handleField('roomType', e.target.value)}>
                  <option value="">Pilih tipe kamar</option>
                  <option>Double Sharing</option>
                  <option>Triple Sharing</option>
                  <option>Twin Sharing</option>
                </select>
              </label>
              <label>
                Jumlah peserta yang direncanakan
                <input type="number" min="1" max="15" value={formData.participantCount} onChange={(e) => handleField('participantCount', e.target.value)} />
              </label>
              <label className="full-width">
                Catatan atau permintaan khusus
                <textarea value={formData.notes} onChange={(e) => handleField('notes', e.target.value)} rows="3" placeholder="Opsional" />
              </label>
              <p className="helper-note full-width">
                Catatan: jumlah peserta yang diisi merupakan rencana pendaftaran. Data setiap peserta akan dilengkapi saat tindak lanjut.
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="form-grid">
              <div className="full-width agent-box">
                <h3>Siapa nama agen yang membantu Bapak/Ibu?</h3>
                <div className="agent-option-row">
                  <label>
                    <input type="radio" name="agentMode" checked={formData.agentMode === 'select_active'} onChange={() => handleField('agentMode', 'select_active')} />
                    Pilih nama agen dari daftar agen aktif
                  </label>
                  <label>
                    <input type="radio" name="agentMode" checked={formData.agentMode === 'none'} onChange={() => handleField('agentMode', 'none')} />
                    Saya belum memiliki agen
                  </label>
                  <label>
                    <input type="radio" name="agentMode" checked={formData.agentMode === 'manual'} onChange={() => handleField('agentMode', 'manual')} />
                    Nama agen saya belum ada dalam daftar
                  </label>
                </div>
              </div>

              {formData.agentMode === 'select_active' && (
                <>
                  <label className="full-width">
                    Pilih agen aktif
                    <select value={formData.selectedAgentId} onChange={(e) => handleField('selectedAgentId', e.target.value)}>
                      <option value="">Pilih agen</option>
                      {appState.agents.map((agent) => (
                        <option key={agent.id} value={agent.id}>{agent.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="full-width">
                    Kode referensi agen (jika ada)
                    <input value={formData.agentRefCode} onChange={(e) => handleField('agentRefCode', e.target.value)} placeholder="Contoh: AR2026" />
                  </label>
                </>
              )}

              {formData.agentMode === 'manual' && (
                <label className="full-width">
                  Tulis nama agen Anda
                  <input value={formData.manualAgentName} onChange={(e) => handleField('manualAgentName', e.target.value)} placeholder="Nama agen" />
                </label>
              )}

              {formData.agentMode === 'select_active' && formData.selectedAgentId && (
                <div className="agent-auto-fill full-width">
                  <strong>Nama agen terpilih:</strong> {selectedAgentDisplay}
                </div>
              )}

              {formData.agentMode === 'none' && <p className="full-width helper-note">Pendaftaran tetap dapat dikirim dan masuk ke admin untuk tindak lanjut.</p>}
            </div>
          )}

          {step === 4 && (
            <div className="summary-card">
              <h3>Periksa data pendaftaran</h3>
              <ul>
                <li>Nama jamaah: <strong>{formData.fullName}</strong></li>
                <li>Nomor WhatsApp: <strong>{formData.whatsapp}</strong></li>
                <li>Paket &amp; jadwal: <strong>{selectedPackage?.name} - {formData.departureDate}</strong></li>
                <li>Jumlah peserta: <strong>{formData.participantCount}</strong></li>
                <li>Nama agen: <strong>{selectedAgentDisplay}</strong></li>
              </ul>

              <label className="consent-box">
                <input type="checkbox" checked={formData.consent} onChange={(e) => handleField('consent', e.target.checked)} />
                Saya menyetujui pemrosesan data untuk keperluan pendaftaran dan tindak lanjut.
              </label>
              <p>
                Baca <Link to="/bantuan">kebijakan privasi</Link> untuk informasi lebih lengkap.
              </p>
            </div>
          )}

          <div className="form-actions">
            {step > 1 && <button type="button" className="button secondary" onClick={prevStep}>Perbaiki Data</button>}
            {step < 4 ? (
              <button type="button" className="button primary" onClick={() => { if (validateStep()) nextStep(); else alert('Mohon lengkapi data yang wajib diisi.'); }}>
                Lanjutkan
              </button>
            ) : (
              <button type="button" className="button primary" onClick={() => { if (validateStep()) submitRegistration(); else alert('Harap setujui persetujuan data sebelum mengirim.'); }}>
                Kirim Pendaftaran
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function HelpPage({ appState }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo" />
        </div>
        <div className="topbar-actions">
          <Link className="button secondary" to="/">Beranda</Link>
        </div>
      </header>

      <main className="content-page help-page">
        <section className="section-card">
          <h1>Bantuan &amp; Kebijakan</h1>
          <h3>Privasi &amp; Keamanan</h3>
          <p>{appState.site.privacyText}</p>
          <h3>Syarat Pendaftaran</h3>
          <p>{appState.site.terms}</p>
          <h3>Hubungi Admin</h3>
          <a className="button primary" href={`https://wa.me/${appState.site.whatsapp}?text=${encodeURIComponent('Halo Anihamid, saya ingin bertanya mengenai pendaftaran.')}`} target="_blank" rel="noreferrer">
            WhatsApp Admin
          </a>
        </section>
      </main>
    </div>
  );
}

function LoginPetugas({ appState, adminSession, setAdminSession }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === appState.admin.username && form.password === appState.admin.password) {
      setAdminSession(true);
      navigate('/admin');
      return;
    }
    alert('Username atau password tidak valid.');
  };

  if (adminSession) return <Navigate to="/admin" replace />;

  return (
    <div className="page-shell auth-page">
      <div className="section-card login-box">
        <img src={appState.site.logo} alt="Anihamid logo" className="brand-logo big" />
        <h1>Login Petugas</h1>
        <form onSubmit={handleLogin} className="auth-form">
          <label>
            Username
            <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </label>
          <button type="submit" className="button primary">Masuk</button>
          <Link to="/" className="button secondary">Kembali ke Dashboard</Link>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ appState, adminSession, setAdminSession, updateAppState }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pendaftaran');

  useEffect(() => {
    if (!adminSession) navigate('/login-petugas');
  }, [adminSession, navigate]);

  if (!adminSession) return null;

  const handleStatusChange = (registrationId, status) => {
    updateAppState((prev) => ({
      ...prev,
      registrations: prev.registrations.map((reg) => (reg.id === registrationId ? { ...reg, status } : reg)),
    }));
  };

  const updateSite = (key, value) => {
    updateAppState((prev) => ({
      ...prev,
      site: { ...prev.site, [key]: value },
    }));
  };

  const updatePackage = (id, key, value) => {
    updateAppState((prev) => ({
      ...prev,
      packages: prev.packages.map((pkg) => (pkg.id === id ? { ...pkg, [key]: value } : pkg)),
    }));
  };

  const updateAgent = (id, key, value) => {
    updateAppState((prev) => ({
      ...prev,
      agents: prev.agents.map((agent) => (agent.id === id ? { ...agent, [key]: value } : agent)),
    }));
  };

  const addAgent = () => {
    updateAppState((prev) => ({
      ...prev,
      agents: [
        ...prev.agents,
        {
          id: `AG-${Date.now()}`,
          name: 'Agen Baru',
          code: `NEW-${Math.floor(Math.random() * 900 + 100)}`,
          phone: '628000000000',
          status: 'Aktif',
          notes: 'Agen baru',
        },
      ],
    }));
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src={appState.site.logo} alt="logo" className="brand-logo" />
          <strong>{appState.site.company}</strong>
        </div>
        <nav>
          <button className={activeTab === 'pendaftaran' ? 'active' : ''} onClick={() => setActiveTab('pendaftaran')}>Pendaftaran Masuk</button>
          <button className={activeTab === 'konten' ? 'active' : ''} onClick={() => setActiveTab('konten')}>Konten Publik</button>
          <button className={activeTab === 'paket' ? 'active' : ''} onClick={() => setActiveTab('paket')}>Paket</button>
          <button className={activeTab === 'agen' ? 'active' : ''} onClick={() => setActiveTab('agen')}>Agen</button>
          <button className={activeTab === 'kebijakan' ? 'active' : ''} onClick={() => setActiveTab('kebijakan')}>Privasi &amp; Syarat</button>
        </nav>
        <button className="button secondary logout" onClick={() => { setAdminSession(false); navigate('/login-petugas'); }}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        {activeTab === 'pendaftaran' && (
          <section className="section-card admin-panel">
            <h2>Pendaftaran Masuk</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Waktu</th>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>WhatsApp</th>
                    <th>Paket</th>
                    <th>Jumlah</th>
                    <th>Agen</th>
                    <th>Sumber</th>
                    <th>Status</th>
                    <th>Catatan</th>
                  </tr>
                </thead>
                <tbody>
                  {appState.registrations.length === 0 ? (
                    <tr><td colSpan="10">Belum ada pendaftaran masuk.</td></tr>
                  ) : (
                    appState.registrations.map((reg) => (
                      <tr key={reg.id}>
                        <td>{new Date(reg.createdAt).toLocaleString('id-ID')}</td>
                        <td>{reg.code}</td>
                        <td>{reg.fullName}</td>
                        <td>{reg.whatsapp}</td>
                        <td>{reg.packageName}</td>
                        <td>{reg.participantCount}</td>
                        <td>{reg.agent}</td>
                        <td>{reg.source}</td>
                        <td>
                          <select value={reg.status} onChange={(e) => handleStatusChange(reg.id, e.target.value)}>
                            <option>Baru</option>
                            <option>Dihubungi</option>
                            <option>Menunggu Kelengkapan</option>
                            <option>Terkonfirmasi</option>
                            <option>Dibatalkan</option>
                          </select>
                        </td>
                        <td>{reg.notes || '-'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'konten' && (
          <section className="section-card admin-panel">
            <h2>Pengaturan Konten Publik</h2>
            <div className="form-grid admin-form-grid">
              <label>Judul utama <input value={appState.site.headline} onChange={(e) => updateSite('headline', e.target.value)} /></label>
              <label>Tagline <input value={appState.site.tagline} onChange={(e) => updateSite('tagline', e.target.value)} /></label>
              <label className="full-width">Alamat <input value={appState.site.address} onChange={(e) => updateSite('address', e.target.value)} /></label>
              <label>WhatsApp <input value={appState.site.whatsapp} onChange={(e) => updateSite('whatsapp', e.target.value)} /></label>
              <label>Instagram <input value={appState.site.instagram} onChange={(e) => updateSite('instagram', e.target.value)} /></label>
              <label>Facebook <input value={appState.site.facebook} onChange={(e) => updateSite('facebook', e.target.value)} /></label>
              <label className="full-width">Profil perusahaan <textarea rows="4" value={appState.site.about} onChange={(e) => updateSite('about', e.target.value)} /></label>
              <label className="full-width">URL banner <input value={appState.site.banner} onChange={(e) => updateSite('banner', e.target.value)} /></label>
            </div>
          </section>
        )}

        {activeTab === 'paket' && (
          <section className="section-card admin-panel">
            <h2>Kelola Paket</h2>
            {appState.packages.map((pkg) => (
              <div key={pkg.id} className="package-editor">
                <h3>{pkg.name}</h3>
                <div className="form-grid admin-form-grid">
                  <label>Nama paket <input value={pkg.name} onChange={(e) => updatePackage(pkg.id, 'name', e.target.value)} /></label>
                  <label>Harga mulai <input value={pkg.priceFrom} onChange={(e) => updatePackage(pkg.id, 'priceFrom', Number(e.target.value))} /></label>
                  <label>Tanggal keberangkatan <input value={pkg.departureDate} onChange={(e) => updatePackage(pkg.id, 'departureDate', e.target.value)} /></label>
                  <label>Durasi <input value={pkg.duration} onChange={(e) => updatePackage(pkg.id, 'duration', e.target.value)} /></label>
                  <label>Kota keberangkatan <input value={pkg.departureCity} onChange={(e) => updatePackage(pkg.id, 'departureCity', e.target.value)} /></label>
                  <label>Maskapai <input value={pkg.airline} onChange={(e) => updatePackage(pkg.id, 'airline', e.target.value)} /></label>
                  <label className="full-width">URL brosur <input value={pkg.brochure} onChange={(e) => updatePackage(pkg.id, 'brochure', e.target.value)} /></label>
                  <label className="full-width">Deskripsi <textarea rows="3" value={pkg.details} onChange={(e) => updatePackage(pkg.id, 'details', e.target.value)} /></label>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'agen' && (
          <section className="section-card admin-panel">
            <h2>Daftar Agen</h2>
            <button className="button primary" onClick={addAgent}>Tambah Agen</button>
            <div className="agent-list">
              {appState.agents.map((agent) => (
                <div className="agent-item" key={agent.id}>
                  <div className="form-grid admin-form-grid">
                    <label>Nama agen <input value={agent.name} onChange={(e) => updateAgent(agent.id, 'name', e.target.value)} /></label>
                    <label>Kode referensi <input value={agent.code} onChange={(e) => updateAgent(agent.id, 'code', e.target.value)} /></label>
                    <label>Nomor WhatsApp <input value={agent.phone} onChange={(e) => updateAgent(agent.id, 'phone', e.target.value)} /></label>
                    <label>Status <select value={agent.status} onChange={(e) => updateAgent(agent.id, 'status', e.target.value)}><option>Aktif</option><option>Nonaktif</option></select></label>
                    <label className="full-width">Catatan <textarea rows="2" value={agent.notes} onChange={(e) => updateAgent(agent.id, 'notes', e.target.value)} /></label>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'kebijakan' && (
          <section className="section-card admin-panel">
            <h2>Privasi &amp; Syarat</h2>
            <div className="form-grid admin-form-grid">
              <label className="full-width">Kebijakan privasi <textarea rows="6" value={appState.site.privacyText} onChange={(e) => updateSite('privacyText', e.target.value)} /></label>
              <label className="full-width">Syarat pendaftaran <textarea rows="6" value={appState.site.terms} onChange={(e) => updateSite('terms', e.target.value)} /></label>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
