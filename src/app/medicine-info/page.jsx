"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Modal } from "@heroui/react";

const medicines = [
  {
    name: "Paracetamol",
    image:
      "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/2/0/532120_paracetamolbackgroundinformationcoverimage_807319_crop.jpg",
    condition: "Fever, headache, mild pain",
    dosage: "500 mg every 4-6 hours",
    ageGroup: "Adults and children over 12 years",
    description:
      "Widely used analgesic and antipyretic for common fever and pain relief.",
    sideEffects: ["Nausea", "Liver damage in overdose", "Rash"],
    precautions: ["Avoid alcohol", "Not for severe liver disease", "Use as directed"],
    interactions: ["Warfarin", "Carbamazepine", "Phenytoin"],
  },
  {
    name: "Ibuprofen",
    image:
      "https://www.ashcroftpharmacy.co.uk/uploads/images/products/large/ashcroft-pharmacy-ibuprofen-400mg-tablets-1740783905Ibuprofen-400mg-Tablets.png",
    condition: "Inflammation, pain, fever",
    dosage: "200-400 mg every 6-8 hours",
    ageGroup: "Adults and children over 12 years",
    description:
      "Nonsteroidal anti-inflammatory medicine to reduce pain and swelling.",
    sideEffects: ["Stomach pain", "Heartburn", "Dizziness"],
    precautions: ["Take with food", "Avoid in third trimester", "Use minimum effective dose"],
    interactions: ["Aspirin", "Blood thinners", "ACE inhibitors"],
  },
  {
    name: "Cetirizine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAq7kHNqaerSM03ZIUTFuWjqRy9ZgDcYFWUdK7XGy_Fw&s=10",
    condition: "Allergy, hay fever, skin rash",
    dosage: "10 mg once daily",
    ageGroup: "Adults and children over 6 years",
    description:
      "Second-generation antihistamine for relief from allergic symptoms.",
    sideEffects: ["Sleepiness", "Dry mouth", "Headache"],
    precautions: ["Avoid alcohol", "Not for infants under 6 months", "Use with caution in kidney disease"],
    interactions: ["Theophylline", "Alcohol", "Tricyclic antidepressants"],
  },
  {
    name: "Loratadine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEQRaqUjG4dGfgLNQ0hsGhgm1_FinlecDjynCOAyOZg&s=10",
    condition: "Allergic rhinitis, hives",
    dosage: "10 mg once daily",
    ageGroup: "Adults and children over 2 years",
    description:
      "Non-drowsy antihistamine for seasonal allergy control.",
    sideEffects: ["Headache", "Dry mouth", "Fatigue"],
    precautions: ["Avoid alcohol", "Use with caution in liver disease", "Do not exceed recommended dose"],
    interactions: ["Ketoconazole", "Erythromycin", "Cimetidine"],
  },
  {
    name: "Amoxicillin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxK6KOifjyQqVGp8qJotFiTaRToSC_eybP1bLfx62YQ&s=10",
    condition: "Bacterial respiratory and ear infections",
    dosage: "500 mg every 8 hours",
    ageGroup: "Adults and children",
    description:
      "Broad-spectrum antibiotic used for mild to moderate bacterial infections.",
    sideEffects: ["Diarrhea", "Nausea", "Allergic rash"],
    precautions: ["Complete the full course", "Avoid if penicillin allergic", "Use with caution in kidney disease"],
    interactions: ["Methotrexate", "Allopurinol", "Warfarin"],
  },
  {
    name: "Azithromycin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtRuZjXJs6G8NBA5ZH2rNznU6Ow020DfESWTgKOoDUQ&s=10",
    condition: "Upper respiratory infections, tonsillitis",
    dosage: "500 mg once daily for 3 days",
    ageGroup: "Adults and children over 6 months",
    description:
      "Macrolide antibiotic often prescribed for bacterial throat and chest infections.",
    sideEffects: ["Stomach pain", "Diarrhea", "QT prolongation"],
    precautions: ["Take on an empty stomach", "Avoid in liver disease", "Use with caution in heart rhythm problems"],
    interactions: ["Warfarin", "Statins", "Antacids"],
  },
  {
    name: "Cefixime",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQBvNeOjwU21A_RI5wRajwncuCepmI_oE167s5oYRZQ&s=10",
    condition: "Urinary and respiratory infections",
    dosage: "200 mg once daily",
    ageGroup: "Adults and children over 6 months",
    description:
      "Oral cephalosporin antibiotic used for uncomplicated bacterial infections.",
    sideEffects: ["Stomach upset", "Headache", "Dizziness"],
    precautions: ["Complete full course", "Avoid if cephalosporin allergic", "Use with caution in kidney disease"],
    interactions: ["Probenecid", "Aminoglycosides", "Antacids"],
  },
  {
    name: "Omeprazole",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxLeqWyV8jBOXubm8vwxpm8CNntKyh2NMufJaN-uJvg&s=10",
    condition: "Acid reflux, gastritis, peptic ulcer",
    dosage: "20 mg once daily",
    ageGroup: "Adults and children over 1 year",
    description:
      "Proton pump inhibitor that lowers stomach acid production.",
    sideEffects: ["Headache", "Abdominal pain", "Nausea"],
    precautions: ["Take before meals", "Long-term use may reduce bone density", "Avoid sudden discontinuation"],
    interactions: ["Clopidogrel", "Warfarin", "Diazepam"],
  },
  {
    name: "Pantoprazole",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTB_QcoPLi3jJmjtk0JuZoTW4MeAVGcoChIBUZeADiw&s=10",
    condition: "Heartburn, GERD, ulcer prevention",
    dosage: "40 mg once daily",
    ageGroup: "Adults and children over 5 years",
    description:
      "Gastric acid control medicine for reflux and ulcer symptoms.",
    sideEffects: ["Headache", "Diarrhea", "Flatulence"],
    precautions: ["Take before meals", "Report severe diarrhea immediately", "Use lowest effective dose"],
    interactions: ["Digoxin", "Methotrexate", "Diazepam"],
  },
  {
    name: "Ranitidine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6x9kr8PP2igC34tkfBvCdmclDJv_lbMsuvneLmLIbQ&s=10",
    condition: "Stomach pain, acid reflux",
    dosage: "150 mg twice daily",
    ageGroup: "Adults and children over 12 years",
    description:
      "Histamine-2 blocker that reduces acid secretion in the stomach.",
    sideEffects: ["Headache", "Constipation", "Dizziness"],
    precautions: ["Use short term", "Report confusion or agitation", "Avoid antacids close to dose"],
    interactions: ["Ketoconazole", "Warfarin", "Theophylline"],
  },
  {
    name: "Metformin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv2-zfuY04bgKoKqvOkr2jgOmUIT8VonHD7BJgMMFPw&s=10",
    condition: "Type 2 diabetes",
    dosage: "500 mg twice daily",
    ageGroup: "Adults",
    description:
      "Oral medicine to help control blood sugar levels in diabetic patients.",
    sideEffects: ["Diarrhea", "Nausea", "Lactic acidosis (rare)"],
    precautions: ["Monitor kidney function", "Take with food", "Avoid alcohol"],
    interactions: ["Iodinated contrast dye", "Cimetidine", "Furosemide"],
  },
  {
    name: "Glibenclamide",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSO0_OkQV6qCKBpx9xdbBG6QZeDluChQYhSJl41TvN_w&s=10",
    condition: "Type 2 diabetes",
    dosage: "5 mg once daily",
    ageGroup: "Adults",
    description:
      "Sulfonylurea drug used to lower blood glucose in type 2 diabetes.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Nausea"],
    precautions: ["Use with food", "Monitor blood sugar", "Avoid if sulfonamide allergy"],
    interactions: ["Beta-blockers", "Warfarin", "Alcohol"],
  },
  {
    name: "Amlodipine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oZc4iqzhJ6v0QWnMf6QFanBrab8gaQz5UnYfo02JtA&s=10",
    condition: "High blood pressure",
    dosage: "5 mg once daily",
    ageGroup: "Adults",
    description:
      "Calcium channel blocker used to manage hypertension.",
    sideEffects: ["Swelling", "Flushing", "Dizziness"],
    precautions: ["Avoid grapefruit juice", "Monitor blood pressure", "Do not stop abruptly"],
    interactions: ["Simvastatin", "Ranolazine", "CYP3A4 inhibitors"],
  },
  {
    name: "Losartan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITanhiGrZgZD8_ukXm-RnJ5kTbZeBcpRd7J49_LhPUA&s=10",
    condition: "High blood pressure, heart failure",
    dosage: "50 mg once daily",
    ageGroup: "Adults",
    description:
      "Angiotensin receptor blocker for blood pressure control.",
    sideEffects: ["Dizziness", "Fatigue", "High potassium"],
    precautions: ["Monitor kidney function", "Avoid in pregnancy", "Stay hydrated"],
    interactions: ["Potassium supplements", "NSAIDs", "Lithium"],
  },
  {
    name: "Atorvastatin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0EhwDs_l83SSD7EKanHtUC3Cid6oEzRTp1qugh4HOA&s=10",
    condition: "High cholesterol",
    dosage: "10-20 mg once daily",
    ageGroup: "Adults",
    description:
      "Statin medicine used to reduce LDL cholesterol levels.",
    sideEffects: ["Muscle pain", "Headache", "Digestive upset"],
    precautions: ["Avoid grapefruit juice", "Monitor liver enzymes", "Use with diet and exercise"],
    interactions: ["Fibrates", "Warfarin", "Macrolide antibiotics"],
  },
  {
    name: "Salbutamol",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSlfIIrZD_Br_W_s8pybBsxtndW-S5Ji_YpjyQjmt2A&s=10",
    condition: "Asthma, bronchospasm",
    dosage: "2 puffs every 4-6 hours",
    ageGroup: "Adults and children over 4 years",
    description:
      "Inhaler medicine to relieve wheezing and shortness of breath.",
    sideEffects: ["Tremor", "Palpitations", "Headache"],
    precautions: ["Use only as needed", "Rinse mouth after use", "Monitor for increased heart rate"],
    interactions: ["Beta-blockers", "Diuretics", "MAO inhibitors"],
  },
  {
    name: "Montelukast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJDGvQskySa3LXNArJHoB8UnjfJ-gIcVJV5myZHevnA&s=10",
    condition: "Asthma, allergic rhinitis",
    dosage: "10 mg once daily",
    ageGroup: "Adults and children over 15 years",
    description:
      "Leukotriene receptor antagonist for asthma and allergy control.",
    sideEffects: ["Headache", "Stomach pain", "Mood changes"],
    precautions: ["Monitor mood changes", "Use as add-on therapy", "Not a rescue inhaler"],
    interactions: ["Phenobarbital", "Rifampin", "Aspirin"],
  },
  {
    name: "Paracetamol + Chlorpheniramine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG90EcVWiaYgjRAbIZt63sDs4T1R9fNH04lltlYEbucg&s=10",
    condition: "Cold and cough",
    dosage: "1 tablet every 6 hours",
    ageGroup: "Adults and children over 12 years",
    description:
      "Combination medicine for fever, congestion, and allergy symptoms.",
    sideEffects: ["Drowsiness", "Dry mouth", "Nausea"],
    precautions: ["Avoid driving if drowsy", "Do not exceed 4 doses per day", "Use with caution if hypertensive"],
    interactions: ["MAO inhibitors", "Alcohol", "Other sedatives"],
  },
  {
    name: "Cetirizine + Montelukast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuEDFrmXhMo8W6n7roaF65zp-HdEPBsQA03kfZr4U3A&s=10",
    condition: "Allergic rhinitis",
    dosage: "1 tablet once daily",
    ageGroup: "Adults and children over 15 years",
    description:
      "Combination for long-lasting allergy relief and nasal symptoms.",
    sideEffects: ["Headache", "Fatigue", "Upper respiratory infection"],
    precautions: ["Not a rescue medicine", "Monitor mood changes", "Take in evening"],
    interactions: ["Phenobarbital", "Rifampin", "Alcohol"],
  },
  {
    name: "Mometasone nasal spray",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CbUGlF4eOLHW34s67fE8bAY3DVitgMHe_Hcp9vOXpw&s=10",
    condition: "Nasal allergy, sinus congestion",
    dosage: "2 sprays per nostril once daily",
    ageGroup: "Adults and children over 12 years",
    description:
      "Nasal corticosteroid spray to reduce congestion and inflammation.",
    sideEffects: ["Nasal irritation", "Sneezing", "Dryness"],
    precautions: ["Clear nasal passages first", "Shake well before use", "Use regularly for best effect"],
    interactions: ["Other nasal steroids", "Live nasal vaccines", "None well documented"],
  },
];

const MedicineInfoPage = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

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
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{medicine.name}</h2>
                  <p className="text-sm text-slate-500">{medicine.ageGroup}</p>
                </div>
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

              <p className="mb-2 text-sm font-medium text-slate-700">
                Condition: <span className="text-slate-900">{medicine.condition}</span>
              </p>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Typical dose: <span className="text-slate-900">{medicine.dosage}</span>
              </p>
              <p className="mb-4 text-sm leading-6 text-slate-600">{medicine.description}</p>

              <button
                type="button"
                onClick={() => setSelectedMedicine(medicine)}
                className="mb-4 inline-flex items-center justify-center rounded-full border border-[#0f766e] bg-white px-4 py-2 text-sm font-semibold text-[#0f766e] transition hover:bg-[#0f766e] hover:text-white"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedMedicine.name}</h2>
                <p className="text-sm text-slate-500">{selectedMedicine.ageGroup}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMedicine(null)}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 px-6 py-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-4 text-sm font-medium text-slate-700">
                  Condition: <span className="text-slate-900">{selectedMedicine.condition}</span>
                </p>
                <p className="mb-4 text-sm font-medium text-slate-700">
                  Typical dose: <span className="text-slate-900">{selectedMedicine.dosage}</span>
                </p>
                <p className="mb-4 text-sm leading-6 text-slate-600">{selectedMedicine.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-slate-900">Common side effects</h3>
                    <ul className="ml-4 list-disc text-sm text-slate-700">
                      {(selectedMedicine.sideEffects || []).map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 text-base font-semibold text-slate-900">Precautions</h3>
                    <ul className="ml-4 list-disc text-sm text-slate-700">
                      {(selectedMedicine.precautions || []).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 text-base font-semibold text-slate-900">Drug interactions</h3>
                    <ul className="ml-4 list-disc text-sm text-slate-700">
                      {(selectedMedicine.interactions || []).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {selectedMedicine.image && (
                <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-50">
                  <Image
                    src={selectedMedicine.image}
                    alt={selectedMedicine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 px-6 py-4 text-right">
              <button
                type="button"
                onClick={() => setSelectedMedicine(null)}
                className="rounded-full bg-[#0f766e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#115e59]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineInfoPage;
