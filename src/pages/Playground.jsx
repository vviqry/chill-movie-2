// 1. IMPORT DULU (Panggil Komponennya)
// Pastikan path-nya sesuai struktur folder baru lu
import Button from "../components/Button/Button"; 
import Navbar from "../components/Navbar/Navbar"; // Sekalian tes Navbar kalau berani

function Playground() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#181a1c', color: '#fff' }}>
      <h1>🚧 Zona Test Komponen</h1>
      <p>Gunakan halaman ini untuk menguji komponen satu per satu.</p>
      
      {/* --- AREA TEST --- */}
      <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #444', borderRadius: '12px' }}>
        
        {/* 2. TEST BUTTON */}
        <h3>1. Test Button</h3>
        <div style={{ width: "300px", margin: "0 auto", padding: "20px", background: "#000" }}>
            <p>Variant: Primary</p>
            <Button label="Masuk Sekarang" variant="primary" />

            <p style={{marginTop: "20px"}}>Variant: Google</p>
            <Button label="Masuk Google" variant="google" />
        </div>

        {/* 3. TEST NAVBAR (Opsional, kalau Button udah sukses) */}
        <h3 style={{marginTop: "50px"}}>2. Test Navbar</h3>
        <div style={{ border: "1px solid gray", position: "relative", height: "100px" }}>
            {/* Navbar biasanya fixed, jadi mungkin nempel di atas layar */}
            <Navbar /> 
        </div>

      </div>
    </div>
  );
}

export default Playground;