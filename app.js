// VitaLink Mock Backend and Shared Logic

const MOCK_PATIENTS = {
    "54321098765432": {
        id: "54321098765432",
        name: "Aarav Sharma",
        age: 34,
        bloodType: "B+",
        allergies: ["Sulfa Drugs"],
        history: ["Gastroesophageal Reflux Disease (GERD)", "Anxiety"],
        vaccinations: { "COVID-19": "2024-03-11", "Hepatitis B": "2018-09-05" }
    },
    "67890123456789": {
        id: "67890123456789",
        name: "Priya Patel",
        age: 62,
        bloodType: "AB+",
        allergies: ["Aspirin", "Shellfish"],
        history: ["Hypothyroidism", "Osteoarthritis", "Hyperlipidemia"],
        vaccinations: { "COVID-19": "2023-12-05", "Pneumococcal": "2022-10-14", "Flu": "2025-10-20" }
    },
    "34567890123456": {
        id: "34567890123456",
        name: "Rajesh Kumar",
        age: 51,
        bloodType: "O-",
        allergies: ["None"],
        history: ["Chronic Kidney Disease (Stage 2)", "Hypertension"],
        vaccinations: { "COVID-19": "2024-02-28", "Tetanus": "2023-07-19" }
    },
    "89012345678901": {
        id: "89012345678901",
        name: "Ananya Nair",
        age: 23,
        bloodType: "A+",
        allergies: ["Dairy", "Amoxicillin"],
        history: ["Migraine", "Polycystic Ovary Syndrome (PCOS)"],
        vaccinations: { "COVID-19": "2024-01-22", "HPV": "2019-06-15" }
    },
    "23456789012345": {
        id: "23456789012345",
        name: "Vikram Singh",
        age: 74,
        bloodType: "B-",
        allergies: ["Contrast Dye"],
        history: ["Coronary Artery Disease", "Type 2 Diabetes", "Benign Prostatic Hyperplasia (BPH)"],
        vaccinations: { "COVID-19": "2023-10-02", "Influenza": "2025-11-02", "Shingles": "2021-04-30" }
    },
    "11223344556677": {
        id: "11223344556677",
        name: "Arjun Mehta",
        age: 29,
        bloodType: "O+",
        allergies: ["Dust Mites", "Codeine"],
        history: ["Allergic Rhinitis", "Mild Intermittent Asthma"],
        vaccinations: { "COVID-19": "2024-04-02", "Flu": "2025-09-15" }
    },
    "22334455667788": {
        id: "22334455667788",
        name: "Sunita Rao",
        age: 58,
        bloodType: "A+",
        allergies: ["Ibuprofen"],
        history: ["Rheumatoid Arthritis", "Osteoporosis"],
        vaccinations: { "COVID-19": "2023-11-20", "Pneumococcal": "2024-06-18" }
    },
    "33445566778899": {
        id: "33445566778899",
        name: "Rohan Das",
        age: 42,
        bloodType: "B+",
        allergies: ["None"],
        history: ["Fatty Liver Disease", "Hyperuricemia (Gout)"],
        vaccinations: { "COVID-19": "2024-02-14", "Tetanus": "2025-01-10" }
    },
    "44556677889900": {
        id: "44556677889900",
        name: "Deepika Padukone Iyer",
        age: 37,
        bloodType: "AB-",
        allergies: ["Sulfa Drugs", "Tree Nuts"],
        history: ["Iron Deficiency Anemia", "Hypothyroidism"],
        vaccinations: { "COVID-19": "2024-05-30", "Hepatitis A": "2020-11-12" }
    },
    "55667788990011": {
        id: "55667788990011",
        name: "Karan Johar Joshi",
        age: 65,
        bloodType: "O-",
        allergies: ["Lidocaine"],
        history: ["Type 2 Diabetes", "Hypertension", "Glaucoma"],
        vaccinations: { "COVID-19": "2023-12-12", "Shingles": "2025-03-22", "Flu": "2025-10-05" }
    },
    "66778899001122": {
        id: "66778899001122",
        name: "Meera Reddy",
        age: 31,
        bloodType: "A-",
        allergies: ["Penicillin"],
        history: ["Polycystic Ovary Syndrome (PCOS)", "Migraine with Aura"],
        vaccinations: { "COVID-19": "2024-01-08", "HPV": "2021-08-14" }
    },
    "77889900112233": {
        id: "77889900112233",
        name: "Sanjay Banerjee",
        age: 53,
        bloodType: "B-",
        allergies: ["Shellfish"],
        history: ["Gastroesophageal Reflux Disease (GERD)", "Chronic Sinusitis"],
        vaccinations: { "COVID-19": "2024-03-25", "Typhoid": "2023-05-19" }
    },
    "88990011223344": {
        id: "88990011223344",
        name: "Kriti Choudhury",
        age: 26,
        bloodType: "O+",
        allergies: ["Latex"],
        history: ["Eczema", "Generalized Anxiety Disorder (GAD)"],
        vaccinations: { "COVID-19": "2024-02-19", "Flu": "2025-10-12" }
    },
    "99001122334455": {
        id: "99001122334455",
        name: "Vijay Malhotra",
        age: 48,
        bloodType: "AB+",
        allergies: ["Aspirin"],
        history: ["Hyperlipidemia", "Obstructive Sleep Apnea"],
        vaccinations: { "COVID-19": "2023-10-15", "Tetanus": "2022-07-30" }
    },
    "00112233445566": {
        id: "00112233445566",
        name: "Divya Pillai",
        age: 71,
        bloodType: "B+",
        allergies: ["None"],
        history: ["Atrial Fibrillation", "Hypertension", "Chronic Venous Insufficiency"],
        vaccinations: { "COVID-19": "2023-09-28", "Pneumococcal": "2024-11-04", "Flu": "2025-10-22" }
    }
};

// Simple Auth System
const Auth = {
    users: {
        'EMT': { role: 'paramedic', pass: 'EMT@123', name: 'EMT Operator' },
        'Paramedic': { role: 'paramedic', pass: 'Paramedic@123', name: 'Lead Paramedic' },
        'Receptionist': { role: 'receptionist', pass: 'Receptionists@123', name: 'Hospital Receptionist' }
    },
    login: (username, password) => {
        const user = Auth.users[username];
        if (user && user.pass === password) {
            const session = { username, role: user.role, name: user.name };
            localStorage.setItem(`vitalink_session_${user.role}`, JSON.stringify(session));
            return session;
        }
        throw new Error("Invalid credentials");
    },
    logout: (role) => {
        localStorage.removeItem(`vitalink_session_${role}`);
        window.location.href = 'index.html';
    },
    getSession: (role) => {
        const session = localStorage.getItem(`vitalink_session_${role}`);
        return session ? JSON.parse(session) : null;
    },
    requireRole: (role) => {
        const session = Auth.getSession(role);
        if (!session || session.role !== role) {
            if (role === 'paramedic') window.location.href = 'login-paramedic.html';
            else window.location.href = 'login-hospital.html';
        }
        return session;
    }
};

// Initialize ER Queue in localStorage if not exists
if (!localStorage.getItem('vitalink_er_queue')) {
    localStorage.setItem('vitalink_er_queue', JSON.stringify([]));
}

// Initialize History in localStorage
if (!localStorage.getItem('vitalink_history')) {
    localStorage.setItem('vitalink_history', JSON.stringify([]));
}

// Initialize ER Beds in localStorage if not exists
if (!localStorage.getItem('vitalink_beds') || !JSON.parse(localStorage.getItem('vitalink_beds'))[0].floor) {
    const beds = [];
    for (let f = 1; f <= 2; f++) {
        for (let b = 1; b <= 10; b++) {
            beds.push({
                id: `F${f}-B${b}`,
                floor: f,
                status: 'available',
                incident: null
            });
        }
    }
    localStorage.setItem('vitalink_beds', JSON.stringify(beds));
}

const VitaLinkAPI = {
    // Simulate fetching data from Aadhar-Linked Virtual Health ID
    scanCard: async (virtualId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (MOCK_PATIENTS[virtualId]) {
                    resolve(MOCK_PATIENTS[virtualId]);
                } else {
                    reject(new Error("Patient not found. Invalid ID."));
                }
            }, 800); // simulate network latency
        });
    },

    // Simulate sending data to the ER Dashboard
    beamToER: async (patientData, extractedVitals) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const queue = JSON.parse(localStorage.getItem('vitalink_er_queue'));

                // AI Mock: Determine ESI priority based on vitals/symptoms
                let priority = 'blue'; // Default Level 5
                const notes = extractedVitals.notes.toLowerCase();

                // Level 1: Resuscitation (Red)
                if (notes.includes('unresponsive') || notes.includes('pulseless') || notes.includes('arterial bleeding') || notes.includes('overdose') || notes.includes('cpr')) {
                    priority = 'red';
                }
                // Level 2: Emergent (Orange)
                else if (notes.includes('weakness') || notes.includes('droop') || notes.includes('slurred') || notes.includes('asthma') || notes.includes('stridor') || notes.includes('tearing') || notes.includes('chest pain')) {
                    priority = 'orange';
                }
                // Level 3: Urgent (Yellow)
                else if (notes.includes('abdominal pain') || notes.includes('deformity') || notes.includes('fever') || notes.includes('shortness of breath') || notes.includes('fracture')) {
                    priority = 'yellow';
                }
                // Level 4: Less Urgent (Green)
                else if (notes.includes('laceration') || notes.includes('sutures') || notes.includes('dysuria') || notes.includes('twisted') || notes.includes('swelling') || notes.includes('minor')) {
                    priority = 'green';
                }
                // Level 5: Non-Urgent (Blue) - default

                const currentUser = Auth.getSession('paramedic');
                const newEntry = {
                    incidentId: 'INC-' + Math.floor(Math.random() * 10000),
                    timestamp: new Date().toISOString(),
                    patient: patientData,
                    vitals: extractedVitals,
                    priority: priority,
                    status: 'Incoming', // Incoming, Accepted, Treated
                    beamedBy: currentUser ? currentUser.username : 'Unknown'
                };

                queue.unshift(newEntry); // Add to beginning of queue
                localStorage.setItem('vitalink_er_queue', JSON.stringify(queue));
                
                const history = JSON.parse(localStorage.getItem('vitalink_history')) || [];
                history.unshift(newEntry);
                localStorage.setItem('vitalink_history', JSON.stringify(history));
                
                resolve({ success: true, incidentId: newEntry.incidentId });
            }, 1000); // simulate 5G beaming
        });
    },

    // Simulate ER Dashboard fetching real-time queue
    getERQueue: () => {
        return JSON.parse(localStorage.getItem('vitalink_er_queue')) || [];
    },

    // Get incidents beamed by specific paramedic (from history to keep them forever)
    getParamedicIncidents: (username) => {
        const history = JSON.parse(localStorage.getItem('vitalink_history')) || [];
        return history.filter(q => q.beamedBy === username);
    },

    // Get all history
    getHistory: () => {
        return JSON.parse(localStorage.getItem('vitalink_history')) || [];
    },

    // Accept patient in the ER Dashboard
    acceptPatient: (incidentId) => {
        const queue = JSON.parse(localStorage.getItem('vitalink_er_queue')) || [];
        const index = queue.findIndex(q => q.incidentId === incidentId);
        if (index > -1) {
            queue[index].status = 'Accepted';
            localStorage.setItem('vitalink_er_queue', JSON.stringify(queue));
        }
        
        const history = JSON.parse(localStorage.getItem('vitalink_history')) || [];
        const hIndex = history.findIndex(q => q.incidentId === incidentId);
        if (hIndex > -1) {
            history[hIndex].status = 'Accepted';
            localStorage.setItem('vitalink_history', JSON.stringify(history));
        }
        return index > -1;
    },

    // Get all beds
    getBeds: () => {
        return JSON.parse(localStorage.getItem('vitalink_beds')) || [];
    },

    // Get occupied beds
    getOccupiedBeds: () => {
        const beds = JSON.parse(localStorage.getItem('vitalink_beds')) || [];
        return beds.filter(b => b.status === 'occupied');
    },
    
    // Allocate a bed to an incident
    allocateBed: (bedId, incidentId) => {
        const beds = JSON.parse(localStorage.getItem('vitalink_beds'));
        const queue = JSON.parse(localStorage.getItem('vitalink_er_queue'));
        
        const incidentIndex = queue.findIndex(q => q.incidentId === incidentId);
        if (incidentIndex === -1) throw new Error("Patient incident not found in queue.");
        
        const bedIndex = beds.findIndex(b => b.id === bedId);
        if (bedIndex === -1) throw new Error("Bed not found.");
        
        if (beds[bedIndex].status === 'occupied') throw new Error("Bed is already occupied.");
        
        // Assign
        beds[bedIndex].status = 'occupied';
        beds[bedIndex].incident = queue[incidentIndex];
        
        // Remove from queue
        queue.splice(incidentIndex, 1);
        
        // Update history
        const history = JSON.parse(localStorage.getItem('vitalink_history')) || [];
        const hIndex = history.findIndex(q => q.incidentId === incidentId);
        if (hIndex > -1) {
            history[hIndex].status = `Allocated to ${bedId}`;
            localStorage.setItem('vitalink_history', JSON.stringify(history));
        }
        
        localStorage.setItem('vitalink_beds', JSON.stringify(beds));
        localStorage.setItem('vitalink_er_queue', JSON.stringify(queue));
        return true;
    },
    
    // Free a bed
    freeBed: (bedId) => {
        const beds = JSON.parse(localStorage.getItem('vitalink_beds'));
        const bedIndex = beds.findIndex(b => b.id === bedId);
        if (bedIndex > -1) {
            const incident = beds[bedIndex].incident;
            if (incident) {
                const history = JSON.parse(localStorage.getItem('vitalink_history')) || [];
                const hIndex = history.findIndex(q => q.incidentId === incident.incidentId);
                if (hIndex > -1) {
                    history[hIndex].status = 'Discharged';
                    localStorage.setItem('vitalink_history', JSON.stringify(history));
                }
            }

            beds[bedIndex].status = 'available';
            beds[bedIndex].incident = null;
            localStorage.setItem('vitalink_beds', JSON.stringify(beds));
        }
    },
    
    // Clear the queue for demo purposes
    clearQueue: () => {
        localStorage.setItem('vitalink_er_queue', JSON.stringify([]));
    }
};

// Helper for UI
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `glass-panel fade-in`;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '1rem 2rem';
    toast.style.zIndex = '1000';
    toast.style.borderLeft = `4px solid var(--${type})`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
