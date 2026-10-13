"use client";
import { useState } from "react";

const categories = [
  {
    id: "cleaning",
    label: "Cleaning",
    icon: "✨",
    activeClass: "bg-purple-600 text-white border-purple-600",
    inactiveClass: "text-purple-600 border-purple-600 hover:bg-purple-50",
    headerClass: "bg-purple-600",
    priceClass: "text-purple-600",
    sections: [
      {
        title: "Floor Cleaning",
        note: "Includes: Sweeping, mopping, light scrubbing, dust removal, stain removal, chemical wash",
        rows: [
          { service: "Each room(only:sweeping,mopping)", price: "₹99" },
          { service: "1 Room", price: "₹349" },
          { service: "2 Rooms", price: "₹599" },
          { service: "3 Rooms", price: "₹849" },
          { service: "More than 3 Rooms(per room)", price: "₹299" },
        ],
      },
      {
        title: "Kitchen Cleaning",
        note: null,
        rows: [
          { service: "Basic Kitchen Cleaning", price: "₹499" },
          { service: "Deep Kitchen Cleaning", price: "₹799" },
          { service: "Chimney Cleaning", price: "₹399" },
        ],
      },
      {
        title: "Bathroom Cleaning",
        note: "includes: Hard stain removal, exhaust cleaning, tap polishing",
        rows: [
          { service: "1 Bathroom", price: "₹349" },
          { service: "2 Bathrooms", price: "₹649" },
          { service: "More than 2 Bathrooms(per Bathroom)", price: "₹299" },
        ],
      },
      {
        title: "Garage Cleaning",
        note: null,
        rows: [
          { service: "Bike Wash", price: "₹49" },
          { service: "Basic Car Wash (Exterior)", price: "₹349" },
          { service: "Foam Wash (Exterior)", price: "₹399" },
          { service: "Interior + Exterior Car Cleaning", price: "₹999" },
          { service: "Garage Cleaning", price: "₹799" },
        ],
      },
      {
        title: "Washing Clothes",
        note: null,
        rows: [
          { service: "Normal Wash", price: "₹39/kg" },
          { service: "Wash + Iron", price: "₹59/kg" },
          { service: "Premium Wash", price: "₹79/kg" },
          { service: "Steam Ironing", price: "+₹10/item" },
        ],
      },
    ],
  },
  {
    id: "repairing",
    label: "Repairing",
    icon: "🔧",
    activeClass: "bg-amber-500 text-white border-amber-500",
    inactiveClass: "text-amber-500 border-amber-500 hover:bg-amber-50",
    headerClass: "bg-amber-500",
    priceClass: "text-amber-600",
    sections: [
      {
        title: "AC Repairing / Servicing",
        note: null,
        rows: [
          { service: "AC Inspection", price: "₹99" },
          { service: "Deep Foam Cleaning", price: "₹349" },
          { service: "AC Servicing(1 AC)", price: "₹499" },
          { service: "AC Servicing(2 AC)", price: "₹899" },
          { service: "AC Servicing(3 AC)", price: "₹1,299" },
          { service: "AC Uninstallation", price: "₹349" },
          { service: "Gas Refill", price: "₹1,999" },
        ],
      },
      {
        title: "Refrigerator Repairing / Servicing",
        note: null,
        rows: [
          { service: "Inspection", price: "₹99" },
          { service: "Minor Repair(Power Issue,no cooling,water Leakage)", price: "₹179" },
          { service: "Gas Refill", price: "₹1499" },
        ],
      },
      {
        title: "Water Purifier Service",
        note: null,
        rows: [
          { service: "Inspection", price: "₹99" },
          { service: "Servicing", price: "₹249" },
          { service: "Filter Change", price: "₹299" },
          { service: "Installation", price: "₹499" },
          { service: "Uninstallation", price: "₹299" },
        ],
      },
      {
        title: "House Repairing",
        note: "There will be a survey of the site performed first, then the actual work will start. If the site is within 1km within our office then the survey charge will be free. If not then the survey charge will be ₹149 (fixed). Painting charges ₹15/sqft + paint charge per actual.",
        rows: [
          { service: "Wall Patch Repair", price: "₹49/sqft" },
          { service: "Crack Filling", price: "₹59/sqft" },
          { service: "Waterproofing", price: "₹40 / sq ft" },
          { service: "Plaster Repair", price: "₹35 / sq ft" },
        ],
      
      },
    ],
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: "⚡",
    activeClass: "bg-blue-600 text-white border-blue-600",
    inactiveClass: "text-blue-600 border-blue-600 hover:bg-blue-50",
    headerClass: "bg-blue-600",
    priceClass: "text-blue-600",
    sections: [
      {
        title: "Fan and Appliances Installation",
        note: null,
        rows: [
          { service: "Fan Repair", price: "₹299" },
          { service: "Ceiling Fan Installation", price: "₹99" },
          { service: "Baffle Filter Chimney Installation", price: "₹499" },
          { service: "Island Chimney Installation", price: "₹599" },
          { service: "Refrigerator Installation", price: "₹499" },
          { service: "Door Bell Install", price: "₹149" },
        ],
      },
      {
        title: "Switch and Socket Repair",
        note: null,
        rows: [
          { service: "Switch Replacement (varies on quality of switch)", price: "₹149" },
          { service: "Socket Replacement", price: "₹49" },
          { service: "Consultation Only", price: "₹49" },
          { service: "Mcb / fuse work (repair or replacement) 1-2 switch", price: "₹149" },
          { service: "New Mcb installation / Fixing (single phase system)", price: "₹299" },
          { service: "New Mcb installation / Fixing (three phase system)", price: "₹499" },
          { service: "Full Mcb board upgrade", price: "₹2,499" },
        ],
      },
      {
        title: "Lighting Services",
        note: null,
        rows: [
          { service: "Bulb / tubelight install", price: "₹49" },
          { service: "Switchboard Repair", price: "₹249" },
        ],
      },
      {
        title: "Wiring and Rewiring",
        note: "There will be a survey of the site performed first, then the actual work will start. The survey charge will be ₹99 (fixed). Large jobs will be based on site estimation.",
        rows: [
          { service: "New Internal Wiring", price: "₹149(per 5m)" },
          { service: "New External Wiring with Casing", price: "₹199(per 5m)" },
          { service: "New External Wiring without Casing", price: "₹99(per 5m)" },
        ],
      },
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "🪠",
    activeClass: "bg-emerald-600 text-white border-emerald-600",
    inactiveClass: "text-emerald-600 border-emerald-600 hover:bg-emerald-50",
    headerClass: "bg-emerald-600",
    priceClass: "text-emerald-600",
    sections: [
      {
        title: "Water Supply Services",
        note: null,
        rows: [
          { service: "Tap Repair", price: "₹79" },
          { service: "Pipe Leakage Repair", price: "₹299" },
          { service: "Washing Machine Repair", price: "₹499" },
        ],
      },
      {
        title: "Drainage and Sewage Services",
        note: null,
        rows: [
          { service: "Drain Block Removal(sink basin/wash basin)", price: "₹169" },
          { service: "Drain Cover Installation", price: "₹99" },
        ],
      },
      {
        title: "Bathroom Plumbing Services",
        note: "There will be a survey of the site performed first, then the actual work will start. The survey charge will be ₹99(fixed). Large jobs will be based on site estimation ",
        rows: [
          { service: "1 Bathroom Groutiing", price: "₹2,499" },
          { service: "Jet Spray Install", price: "₹99" },
          { service: "Flush Tank Leakage Repair(pvc/ceramic)", price: "₹149" },
        ],
      },
      {
        title: "Pipe Installation and Repair",
        note: null,
        rows: [
          { service: "Water Pipeline Work", price: "Based on site estimation" },
          { service: "Motor Installation", price: "₹499" },
        ],
      },
    ],
  },
  {
    id: "Shifting",
    label: "Shifting",
    icon: "🚛",
    activeClass: "bg-green-600 text-white border-emerald-600",
    inactiveClass: "text-green-600 border-emerald-600 hover:bg-green-50",
    headerClass: "bg-green-600",
    priceClass: "text-green-600",
    sections: [
      {
        title: "Household Shifting(Within Cities)",
        note: null,
        rows: [
          { service: "Packing Only", price: "₹14 / kg" },
          { service: "Packing and Forwarding", price: "₹80/km" },
        ],
      },
    ],
  },
];

export default function PriceChart() {
  const [active, setActive] = useState("cleaning");
  const current = categories.find((c) => c.id === active);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Our <span className="text-purple-600">Price Chart</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Transparent pricing — no hidden charges
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-200 cursor-pointer ${
              active === cat.id ? cat.activeClass : cat.inactiveClass
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-5">
        {current.sections.map((section, si) => (
          <div
            key={si}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
          >
            {/* Section Header */}
            <div className={`${current.headerClass} px-5 py-3`}>
              <p className="text-white font-semibold text-base">{section.title}</p>
              {section.note && (
                <p className="text-white/80 text-xs mt-0.5">ℹ️ {section.note}</p>
              )}
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Service
                  </th>
                  <th className="text-right px-5 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-b border-gray-100 last:border-0 ${
                      ri % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-5 py-3 text-sm text-gray-700">
                      {row.service}
                    </td>
                    <td
                      className={`px-5 py-3 text-sm font-bold text-right ${current.priceClass}`}
                    >
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-xs text-gray-400 mt-6">
        
      </p>
    </section>
  );
}
