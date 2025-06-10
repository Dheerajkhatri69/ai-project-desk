"use client";

export default function CreateProjectPage() {
  return (
    <div className="flex w-full h-screen bg-white">
      {/* Left: Google Map */}
      <div className="flex-1 relative min-w-[350px]">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3t-XFa8kH126eVh-Vlnavw2O89rmjzpk&q=8031+Main+Street,Stanton,California+90680"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
        {/* Example marker popup (static for demo) */}
        <div className="absolute left-1/2 top-[38%] transform -translate-x-1/2 -translate-y-full bg-white rounded-lg shadow px-4 py-2 text-gray-800 text-sm min-w-[260px]">
          8031 Main Street, Stanton, California 90680
          <button className="absolute top-1 right-2 text-gray-400 hover:text-gray-700">×</button>
        </div>
      </div>

      {/* Right: Add Project Details Form */}
      <div className="w-full max-w-xl bg-white border-l border-gray-200 h-full overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Add Project Details</h2>
          <button className="text-2xl text-gray-400 hover:text-gray-700">&times;</button>
        </div>
        <form className="flex-1 px-6 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Project ID *</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" value="1002" readOnly />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Project Name *</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Project Status</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" value="Pending" readOnly />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Project Type *</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs text-gray-500 mb-1">Customer *</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs text-gray-500 mb-1">Street</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs text-gray-500 mb-1">Street 2</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">City</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">State</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Zip</label>
              <input className="w-full border-b border-gray-200 focus:outline-none py-1" />
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <label className="block text-xs text-gray-500 mb-1">Use Project Templates</label>
              <span className="text-gray-400 cursor-pointer" title="Info">&#9432;</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#16253b] text-white font-semibold py-3 rounded mt-6 hover:bg-[#0e1a2a] transition"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}