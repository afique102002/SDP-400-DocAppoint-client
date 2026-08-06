import Image from "next/image";

const medicines = [
  {
    name: "Paracetamol",
    image:
      "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/2/0/532120_paracetamolbackgroundinformationcoverimage_807319_crop.jpg",
    condition: "Fever, headache, mild pain",
    dosage: "500 mg every 4-6 hours",
    description:
      "Widely used analgesic and antipyretic for common fever and pain relief.",
  },
  {
    name: "Ibuprofen",
    image:
      "https://www.ashcroftpharmacy.co.uk/uploads/images/products/large/ashcroft-pharmacy-ibuprofen-400mg-tablets-1740783905Ibuprofen-400mg-Tablets.png",
    condition: "Inflammation, pain, fever",
    dosage: "200-400 mg every 6-8 hours",
    description:
      "Nonsteroidal anti-inflammatory medicine to reduce pain and swelling.",
  },
  {
    name: "Cetirizine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAq7kHNqaerSM03ZIUTFuWjqRy9ZgDcYFWUdK7XGy_Fw&s=10",
    condition: "Allergy, hay fever, skin rash",
    dosage: "10 mg once daily",
    description:
      "Second-generation antihistamine for relief from allergic symptoms.",
  },
  {
    name: "Loratadine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEQRaqUjG4dGfgLNQ0hsGhgm1_FinlecDjynCOAyOZg&s=10",
    condition: "Allergic rhinitis, hives",
    dosage: "10 mg once daily",
    description:
      "Non-drowsy antihistamine for seasonal allergy control.",
  },
  {
    name: "Amoxicillin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxK6KOifjyQqVGp8qJotFiTaRToSC_eybP1bLfx62YQ&s=10",
    condition: "Bacterial respiratory and ear infections",
    dosage: "500 mg every 8 hours",
    description:
      "Broad-spectrum antibiotic used for mild to moderate bacterial infections.",
  },
  {
    name: "Azithromycin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtRuZjXJs6G8NBA5ZH2rNznU6Ow020DfESWTgKOoDUQ&s=10",
    condition: "Upper respiratory infections, tonsillitis",
    dosage: "500 mg once daily for 3 days",
    description:
      "Macrolide antibiotic often prescribed for bacterial throat and chest infections.",
  },
  {
    name: "Cefixime",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQBvNeOjwU21A_RI5wRajwncuCepmI_oE167s5oYRZQ&s=10",
    condition: "Urinary and respiratory infections",
    dosage: "200 mg once daily",
    description:
      "Oral cephalosporin antibiotic used for uncomplicated bacterial infections.",
  },
  {
    name: "Omeprazole",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxLeqWyV8jBOXubm8vwxpm8CNntKyh2NMufJaN-uJvg&s=10",
    condition: "Acid reflux, gastritis, peptic ulcer",
    dosage: "20 mg once daily",
    description:
      "Proton pump inhibitor that lowers stomach acid production.",
  },
  {
    name: "Pantoprazole",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTB_QcoPLi3jJmjtk0JuZoTW4MeAVGcoChIBUZeADiw&s=10",
    condition: "Heartburn, GERD, ulcer prevention",
    dosage: "40 mg once daily",
    description:
      "Gastric acid control medicine for reflux and ulcer symptoms.",
  },
  {
    name: "Ranitidine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6x9kr8PP2igC34tkfBvCdmclDJv_lbMsuvneLmLIbQ&s=10",
    condition: "Stomach pain, acid reflux",
    dosage: "150 mg twice daily",
    description:
      "Histamine-2 blocker that reduces acid secretion in the stomach.",
  },
  {
    name: "Metformin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv2-zfuY04bgKoKqvOkr2jgOmUIT8VonHD7BJgMMFPw&s=10",
    condition: "Type 2 diabetes",
    dosage: "500 mg twice daily",
    description:
      "Oral medicine to help control blood sugar levels in diabetic patients.",
  },
  {
    name: "Glibenclamide",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSO0_OkQV6qCKBpx9xdbBG6QZeDluChQYhSJl41TvN_w&s=10",
    condition: "Type 2 diabetes",
    dosage: "5 mg once daily",
    description:
      "Sulfonylurea drug used to lower blood glucose in type 2 diabetes.",
  },
  {
    name: "Amlodipine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oZc4iqzhJ6v0QWnMf6QFanBrab8gaQz5UnYfo02JtA&s=10",
    condition: "High blood pressure",
    dosage: "5 mg once daily",
    description:
      "Calcium channel blocker used to manage hypertension.",
  },
  {
    name: "Losartan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITanhiGrZgZD8_ukXm-RnJ5kTbZeBcpRd7J49_LhPUA&s=10",
    condition: "High blood pressure, heart failure",
    dosage: "50 mg once daily",
    description:
      "Angiotensin receptor blocker for blood pressure control.",
  },
  {
    name: "Atorvastatin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0EhwDs_l83SSD7EKanHtUC3Cid6oEzRTp1qugh4HOA&s=10",
    condition: "High cholesterol",
    dosage: "10-20 mg once daily",
    description:
      "Statin medicine used to reduce LDL cholesterol levels.",
  },
  {
    name: "Salbutamol",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSlfIIrZD_Br_W_s8pybBsxtndW-S5Ji_YpjyQjmt2A&s=10",
    condition: "Asthma, bronchospasm",
    dosage: "2 puffs every 4-6 hours",
    description:
      "Inhaler medicine to relieve wheezing and shortness of breath.",
  },
  {
    name: "Montelukast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJDGvQskySa3LXNArJHoB8UnjfJ-gIcVJV5myZHevnA&s=10",
    condition: "Asthma, allergic rhinitis",
    dosage: "10 mg once daily",
    description:
      "Leukotriene receptor antagonist for asthma and allergy control.",
  },
  {
    name: "Paracetamol + Chlorpheniramine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG90EcVWiaYgjRAbIZt63sDs4T1R9fNH04lltlYEbucg&s=10",
    condition: "Cold and cough",
    dosage: "1 tablet every 6 hours",
    description:
      "Combination medicine for fever, congestion, and allergy symptoms.",
  },
  {
    name: "Cetirizine + Montelukast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuEDFrmXhMo8W6n7roaF65zp-HdEPBsQA03kfZr4U3A&s=10",
    condition: "Allergic rhinitis",
    dosage: "1 tablet once daily",
    description:
      "Combination for long-lasting allergy relief and nasal symptoms.",
  },
  {
    name: "Mometasone nasal spray",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CbUGlF4eOLHW34s67fE8bAY3DVitgMHe_Hcp9vOXpw&s=10",
    condition: "Nasal allergy, sinus congestion",
    dosage: "2 sprays per nostril once daily",
    description:
      "Nasal corticosteroid spray to reduce congestion and inflammation.",
  },
];

const MedicineInfoPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Medicine Info</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Basic medicine information for common diseases and symptoms. Review the typical dose and condition, then consult a doctor before use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {medicines.map((medicine, index) => (
            <div
              key={medicine.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">{medicine.name}</h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  {index + 1}
                </span>
              </div>

              {medicine.image && (
                <div className="mb-4 h-32 w-full relative rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={medicine.image}
                    alt={medicine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              )}

              <p className="mb-3 text-sm font-medium text-slate-700">
                Condition: <span className="text-slate-900">{medicine.condition}</span>
              </p>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Typical dose: <span className="text-slate-900">{medicine.dosage}</span>
              </p>
              <p className="text-sm leading-6 text-slate-600">{medicine.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineInfoPage;
