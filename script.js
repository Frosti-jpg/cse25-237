function filterSelection(categories) {
    const items = document.querySelectorAll('.product-card');

    items.forEach(item => {
        const cat = item.getAttribute('data-category');
        const matches = (categories === 'all' || categories === cat);
        item.style.display = matches ? "flex" : "none";
    });
}

const products = {
    rtx4070: {
        title: "Asus ProArt GeForce RTX 4070 12GB",
        condition: "New",
        conditionColor: "#42f56f",
        price: "BWP 55000",
        mainImage: "Images/AllProducts/Shop/ProArt 4070/Underneath (Small).jpg",
        thumbnails: [
            "Images/AllProducts/Shop/ProArt 4070/In Box Pic (Small).jpg",
            "Images/AllProducts/Shop/ProArt 4070/In Open PC (Small).jpg",
            "Images/AllProducts/Shop/ProArt 4070/Thumbnail (Small).jpg",
            "Images/AllProducts/Shop/ProArt 4070/In PC (Small).png"
        ],
        specs: [
            "GPU: ASUS ProArt GeForce RTX 4070",
            "VRAM: 12GB GDDR6X",
            "Architecture: NVIDIA Ada Lovelace",
            "Memory Bus: 192-bit",
            "Boost Clock: Up to 2535 MHz",
            "Cooling: Triple Axial-Tech Fan Design",
            "Ray Tracing: 3rd Gen RT Cores",
            "AI Features: DLSS 3 & Tensor Cores",
            "Display Outputs: HDMI 2.1a + DisplayPort 1.4a"
        ],
        description: `Designed for creators, professionals, and compact high-performance builds, the ASUS ProArt GeForce RTX 4070 delivers next-generation graphics power in a refined, minimalist form factor.<br><br>
        Powered by NVIDIA's Ada Lovelace architecture, this graphics card combines exceptional gaming performance with serious creative acceleration for workloads such as 3D rendering, video editing, motion graphics, AI-assisted applications, and game development.<br><br>
        The ProArt series emphasizes clean aesthetics, compact sizing, and efficient cooling, making it an ideal choice for workstations, creator PCs, and space-conscious builds without compromising performance.<br><br>
        Equipped with 12GB of ultra-fast GDDR6X memory, advanced ray tracing capabilities, and support for DLSS 3 AI frame generation, the ProArt RTX 4070 delivers smooth high-refresh gaming, accelerated content creation workflows, and powerful multitasking capability.`
    },

    ripjawsram: {
        title: "G.Skill RipJaws S5 48GB DDR5 6000MT/s (2x24GB)",
        condition: "New",
        conditionColor: "#42f56f",
        price: "BWP 8999",
        mainImage: "Images/AllProducts/Shop/RipJaws S5 48GB/MainGSkill.jpg",
        thumbnails: [
            "Images/AllProducts/Shop/RipJaws S5 48GB/DiagonalGSkill.jpg"
        ],
        specs: [
            "Capacity: 48GB (2x24GB)",
            "Type: DDR5",
            "Speed: 6000MT/s",
            "Latency: CL30",
            "Voltage: 1.35V",
            "Form Factor: DIMM",
            "XMP Profile: Intel XMP 3.0",
            "Heat Spreader: Low-Profile Aluminum",
            "Error Checking(ECC): Non-ECC"
        ],
        description: `The G.Skill RipJaws S5 DDR5 kit is built for high-performance desktop platforms, offering fast 6000MT/s speeds with tight timings in a sleek low-profile design.<br><br>
        Optimized for Intel and AMD platforms with XMP 3.0 support, this kit delivers reliable performance for gaming, content creation, and productivity workloads.`
    },

    s990evo2tb: {
        title: "Samsung 990 Evo 2TB",
        condition: "New",
        conditionColor: "#42f56f",
        price: "BWP 6000",
        mainImage: "Images/AllProducts/Shop/990 Evo 2TB/Main990.jpg",
        thumbnails: [
            "Images/AllProducts/Shop/990 Evo 2TB/990Side.jpg",
            "Images/AllProducts/Shop/990 Evo 2TB/990Diagonal.jpg",
            "Images/AllProducts/Shop/990 Evo 2TB/990AlternativeSide.jpg",
            "Images/AllProducts/Shop/990 Evo 2TB/990Size.png"
        ],
        specs: [
            "Model: Samsung 990 EVO",
            "Capacity: 2TB",
            "Form Factor: M.2 2280",
            "Interface: PCIe 4.0 x4 / PCIe 5.0 x2 Compatible",
            "Protocol: NVMe 2.0",
            "Sequential Read Speed: Up to 5,000 MB/s",
            "Sequential Write Speed: Up to 4,200 MB/s",
            "NAND Flash: Samsung V-NAND Technology",
            "Use Case: Gaming, Content Creation, Productivity & General Computing"
        ],
        description: `Built for gamers, creators, professionals, and everyday power users, the Samsung 990 EVO 2TB NVMe SSD delivers fast, reliable storage designed to keep modern systems responsive and efficient.<br><br>
        Leveraging Samsung's advanced NVMe technology, the 990 EVO provides rapid boot times, fast application launches, and quick file transfers, making it an excellent upgrade for gaming PCs, creator workstations, laptops, and productivity systems alike.<br><br>
        With 2TB of high-capacity solid-state storage, you'll have room for large game libraries, creative projects, software suites, documents, and media collections without constantly worrying about available space.<br><br>
        Designed with PCIe Gen4 performance and broad platform compatibility in mind, the 990 EVO balances strong everyday speed, power efficiency, and dependable thermal management for demanding workloads and multitasking environments.<br><br>
        Whether you're loading expansive open-world games, editing high-resolution content, coding projects, or simply upgrading from older SATA storage, the Samsung 990 EVO 2TB provides a fast, modern storage solution built for today's computing needs.`
    },

    

};

// --- Product Page Population ---
function loadProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log('ID from URL:', id);
    console.log('Product found:', products[id]);

    const product = products[id];

    if (!product) return; // not on a product page or invalid id

    // Title
    document.getElementById('product-title').innerText = product.title;

    // Condition
    const conditionEl = document.getElementById('product-condition');
    conditionEl.innerText = product.condition;
    conditionEl.style.color = product.conditionColor;

    // Price
    document.getElementById('product-price').innerText = product.price;

    // Main image
    document.querySelector('#main-picture img').src = product.mainImage;

    // Thumbnails
    const thumbContainer = document.getElementById('pictures');
    thumbContainer.innerHTML = "";
    product.thumbnails.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        thumbContainer.appendChild(img);
    });

    // Specs
    const specsContainer = document.querySelector('.product-specifications');
    specsContainer.innerHTML = "<h3>Specifications</h3>";
    product.specs.forEach((spec, i) => {
        const p = document.createElement('p');
        p.className = `slot${i + 1}`;
        p.innerText = spec;
        specsContainer.appendChild(p);
    });

    // Description
    document.querySelector('.product-description p').innerHTML = product.description;
}

loadProductPage();