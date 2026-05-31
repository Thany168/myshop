import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  TrendingUp,
  TrendingDown,
  Download,
  ChevronDown,
  ShoppingBag,
  Users,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const growthData = {
  labels: months,
  datasets: [
    {
      label: "Returning",
      data: [440, 365, 335, 415, 455, 355, 400, 415, 450, 395, 415, 415],
      backgroundColor: "#c7d0e8",
      borderRadius: 3,
      borderSkipped: false,
    },
    {
      label: "New",
      data: [330, 260, 165, 260, 200, 260, 190, 155, 195, 255, 160, 115],
      backgroundColor: "#2563eb",
      borderRadius: 3,
      borderSkipped: false,
    },
  ],
};

const lineData = {
  labels: ["4am", "8am", "12pm", "4pm", "8pm", "Jun 12", "", ""],
  datasets: [
    {
      data: [20, 10, 42, 25, 30, 68, 27, 38],
      borderColor: "#2563eb",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.3,
      fill: false,
    },
  ],
};

const funnelData = {
  labels: [
    "Visited site",
    "Added to cart",
    "Proceed to checkout",
    "Made a purchase",
  ],
  datasets: [
    {
      data: [425, 315, 215, 155],
      backgroundColor: "#2563eb",
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
};

const salesDonutData = {
  datasets: [
    { data: [75, 25], backgroundColor: ["#f59e0b", "#e5e7eb"], borderWidth: 0 },
  ],
};
const convDonutData = {
  datasets: [
    { data: [25, 75], backgroundColor: ["#10b981", "#e5e7eb"], borderWidth: 0 },
  ],
};
const ageDonutData = {
  datasets: [
    {
      data: [50, 30, 10, 10],
      backgroundColor: ["#2563eb", "#f59e0b", "#f97316", "#10b981"],
      borderWidth: 0,
    },
  ],
};

const ageLabels = [
  { label: "0–18 years", value: "50%", color: "#2563eb" },
  { label: "18–30 years", value: "30%", color: "#f59e0b" },
  { label: "30–40 years", value: "10%", color: "#f97316" },
  { label: "Other", value: "10%", color: "#10b981" },
];

const customers = [
  { initials: "L", name: "Lee Henry", orders: 52, spent: "$969.37" },
  { initials: "M", name: "Myrtie McBride", orders: 43, spent: "$909.54" },
  { initials: "T", name: "Tommy Walker", orders: 41, spent: "$728.90" },
  { initials: "L", name: "Lela Cannon", orders: 38, spent: "$679.42" },
  { initials: "J", name: "Jimmy Cook", orders: 34, spent: "$549.71" },
];

const products = [
  { color: "#e8e8e8", name: "Men white T-shirt", clicks: "12,040", units: 195 },
  {
    color: "#d0d0d0",
    name: "Women white T-shirt",
    clicks: "11,234",
    units: 146,
  },
  {
    color: "#888",
    name: "Women striped T-shirt",
    clicks: "10,054",
    units: 122,
  },
  { color: "#555", name: "Men grey hoodie", clicks: "8,405", units: 110 },
  { color: "#e03131", name: "Women red T-shirt", clicks: "5,600", units: 87 },
];

const gridColor = "rgba(0,0,0,0.06)";
const tickColor = "#6b7280";
const tickFont = { size: 11 };

const barOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { mode: "index" } },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: tickColor, font: tickFont },
    },
    y: {
      grid: { color: gridColor },
      ticks: { color: tickColor, font: tickFont },
      border: { display: false },
    },
  },
};

const lineOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (v) => "$" + v.raw } },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: tickColor, font: { size: 10 } },
    },
    y: {
      grid: { color: gridColor },
      ticks: { color: tickColor, font: { size: 10 }, callback: (v) => "$" + v },
      border: { display: false },
    },
  },
};

const funnelOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (v) => v.raw + " users" } },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: tickColor, font: tickFont },
    },
    y: {
      grid: { color: gridColor },
      ticks: { color: tickColor, font: tickFont },
      border: { display: false },
    },
  },
};

const donutOpts = (centerText) => ({
  responsive: false,
  cutout: "72%",
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
    title: {
      display: true,
      text: centerText,
      color: "#111827",
      font: { size: 18, weight: "500" },
      position: "top",
      padding: { top: 42 },
    },
  },
});

const ageDonutOpts = {
  responsive: false,
  cutout: "65%",
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (v) => v.raw + "%" } },
  },
};

function StatCard({ label, value, change, up }) {
  return (
    <div className="flex-1 bg-white border border-slate-200/60 rounded-xl p-4">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-medium text-slate-900">{value}</p>
      <div
        className={`flex items-center gap-1 mt-1 text-xs font-medium ${up ? "text-emerald-600" : "text-red-500"}`}
      >
        {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {change}
      </div>
    </div>
  );
}

function DonutCard({ title, data, opts, rows }) {
  return (
    <div className="flex-1 bg-white border border-slate-200/60 rounded-xl p-4">
      <p className="text-sm font-medium text-slate-800 mb-3">{title}</p>
      <div className="flex justify-center mb-3">
        <Doughnut data={data} options={opts} width={120} height={120} />
      </div>
      <div className="space-y-1">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between text-xs border-t border-slate-100 pt-1"
          >
            <span className="text-slate-500">{label}</span>
            <span className="font-medium text-slate-800">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReportsDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-medium text-slate-900">Reports</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          <Download size={14} /> Export
        </button>
      </div>

      {/* Customer Growth */}
      <div className="bg-white border border-slate-200/60 rounded-xl p-5 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-800">
            Customer growth
          </span>
          <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600">
            Last 12 months <ChevronDown size={12} />
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          {[
            ["#c7d0e8", "Returning customers"],
            ["#2563eb", "New customers"],
          ].map(([c, l]) => (
            <span
              key={l}
              className="flex items-center gap-1.5 text-xs text-slate-500"
            >
              <span
                className="w-2.5 h-2.5 rounded-sm inline-block"
                style={{ background: c }}
              />
              {l}
            </span>
          ))}
        </div>
        <div style={{ height: 220 }}>
          <Bar data={growthData} options={barOpts} />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-3 mb-3">
        <StatCard label="Existing users" value="5,653" change="22.45%" up />
        <StatCard label="New users" value="1,650" change="15.34%" up />
        <StatCard
          label="Total visits"
          value="9,504"
          change="18.25%"
          up={false}
        />
        <StatCard
          label="Unique visits"
          value="5,423"
          change="10.24%"
          up={false}
        />
      </div>

      {/* Sales / Conversion / Avg Order */}
      <div className="flex gap-3 mb-3">
        <DonutCard
          title="Sales goal"
          data={salesDonutData}
          opts={donutOpts("75%")}
          rows={[
            ["Sold for:", "$15,000"],
            ["Month goal:", "$20,000"],
            ["Left:", "$5,000"],
          ]}
        />
        <DonutCard
          title="Conversion rate"
          data={convDonutData}
          opts={donutOpts("25%")}
          rows={[
            ["Cart:", "35%"],
            ["Checkout:", "29%"],
            ["Purchase:", "25%"],
          ]}
        />
        <div className="flex-[2] bg-white border border-slate-200/60 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-800 mb-1">
            Average order value
          </p>
          <div className="flex gap-4 text-xs text-slate-500 mb-3">
            <span>
              This month <strong className="text-slate-800">$48.90</strong>
            </span>
            <span>
              Previous month <strong className="text-slate-800">$48.90</strong>
            </span>
          </div>
          <div style={{ height: 150 }}>
            <Line data={lineData} options={lineOpts} />
          </div>
        </div>
      </div>

      {/* Top Customers + Top Products */}
      <div className="flex gap-3 mb-3">
        {/* Customers */}
        <div className="flex-1 bg-white border border-slate-200/60 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Users size={14} className="text-blue-600" />
            <p className="text-sm font-medium text-slate-800">Top customers</p>
          </div>
          <div className="grid grid-cols-3 text-xs text-slate-400 pb-2 border-b border-slate-100">
            <span>Name</span>
            <span className="text-center">Orders</span>
            <span className="text-right">Spent</span>
          </div>
          {customers.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-3 items-center py-2 border-b border-slate-50 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center justify-center flex-shrink-0">
                  {c.initials}
                </div>
                <span className="text-xs text-slate-700">{c.name}</span>
              </div>
              <span className="text-xs text-slate-600 text-center">
                {c.orders}
              </span>
              <span className="text-xs font-medium text-slate-800 text-right">
                {c.spent}
              </span>
            </div>
          ))}
        </div>
        {/* Products */}
        <div className="flex-1 bg-white border border-slate-200/60 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ShoppingBag size={14} className="text-blue-600" />
            <p className="text-sm font-medium text-slate-800">Top products</p>
          </div>
          <div className="grid grid-cols-3 text-xs text-slate-400 pb-2 border-b border-slate-100">
            <span>Name</span>
            <span className="text-center">Clicks</span>
            <span className="text-right">Units sold</span>
          </div>
          {products.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-3 items-center py-2 border-b border-slate-50 last:border-0"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: p.color + "33" }}
                >
                  <div
                    className="w-3.5 h-4.5 rounded"
                    style={{
                      background: p.color,
                      opacity: 0.8,
                      width: 14,
                      height: 18,
                    }}
                  />
                </div>
                <span className="text-xs text-slate-700 leading-tight">
                  {p.name}
                </span>
              </div>
              <span className="text-xs text-slate-600 text-center">
                {p.clicks}
              </span>
              <span className="text-xs font-medium text-slate-800 text-right">
                {p.units}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Store Funnel + Age Distribution */}
      <div className="flex gap-3">
        <div className="flex-[2] bg-white border border-slate-200/60 rounded-xl p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-sm font-medium text-slate-800 mr-2">
                Store funnel
              </span>
              <span className="text-xs text-slate-500">
                Conversion rate <strong className="text-slate-800">28%</strong>
              </span>
              <span className="ml-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                4% increase
              </span>
            </div>
            <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600">
              Last 7 days <ChevronDown size={12} />
            </button>
          </div>
          <div style={{ height: 200 }}>
            <Bar data={funnelData} options={funnelOpts} />
          </div>
        </div>
        <div className="flex-1 bg-white border border-slate-200/60 rounded-xl p-4">
          <p className="text-sm font-medium text-slate-800 mb-3">
            Age distribution
          </p>
          <div className="flex justify-center mb-3">
            <Doughnut
              data={ageDonutData}
              options={ageDonutOpts}
              width={120}
              height={120}
            />
          </div>
          <div className="space-y-2">
            {ageLabels.map(({ label, value, color }) => (
              <div
                key={label}
                className="flex justify-between items-center text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-sm inline-block"
                    style={{ background: color }}
                  />
                  <span className="text-slate-500">{label}</span>
                </div>
                <strong className="text-slate-800">{value}</strong>
              </div>
            ))}
          </div>
          <button className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-700">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}
