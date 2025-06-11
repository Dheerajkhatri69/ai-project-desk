"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

export default function CreateProjectPage() {
  const [projectStatus, setProjectStatus] = useState("Pending");

  return (
    <div className="flex w-full h-screen bg-white overflow-hidden">
      {/* Left: Google Map */}
      <div className="flex-1 relative min-w-[350px] h-full">
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
        <div className="absolute left-1/2 top-[38%] transform -translate-x-1/2 -translate-y-full bg-white rounded-lg shadow px-4 py-2 text-gray-800 text-sm min-w-[260px]">
          8031 Main Street, Stanton, California 90680
          <button className="absolute top-1 right-2 text-gray-400 hover:text-gray-700">×</button>
        </div>
      </div>

      {/* Right: Project Form */}
      <div className="w-full max-w-xl h-full flex flex-col border-l-4 border-amber-400 rounded-xl">
        <Card className="flex-1 flex flex-col h-full">
          <CardHeader className="flex items-center justify-between border-b pb-2 pt-3 px-4">
            <CardTitle className="text-base">Add Project Details</CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col px-4 py-3">
            <form className="flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">Project ID *</label>
                  <Input value="1002" readOnly className="h-8" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">Project Name *</label>
                  <Input placeholder="Enter project name" className="h-8" />
                </div>
                <div >
                  <label className="block text-xs text-gray-500 mb-0.5">Project Status *</label>
                  <Select value={projectStatus} onValueChange={setProjectStatus}>
                    <SelectTrigger className="h-8 w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Bidding">Bidding</SelectItem>
                      <SelectItem value="Submittal">Submittal</SelectItem>
                      <SelectItem value="Unscheduled">Unscheduled</SelectItem>
                      <SelectItem value="Started">Started</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">Project Type *</label>
                  <Input placeholder="Enter project type" className="h-8" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500 mb-0.5">Customer *</label>
                  <Input placeholder="Enter customer name" className="h-8" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500 mb-0.5">Street</label>
                  <Input className="h-8" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500 mb-0.5">Street 2</label>
                  <Input className="h-8" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">City</label>
                  <Input className="h-8" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">State</label>
                  <Input className="h-8" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-0.5">Zip</label>
                  <Input className="h-8" />
                </div>
                <div className="col-span-2 flex items-center gap-2 mt-1">
                  <label className="block text-xs text-gray-500">Use Project Templates</label>
                  <span className="text-gray-400 cursor-pointer" title="Info">&#9432;</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-lg font-bold  bg-[linear-gradient(90deg,_#fe9c09,_#fe9c09,_#00b6dd,_#006eaf)] text-white py-2.5 rounded hover:bg-[#0e1a2a] transition mt-3"
              >
                Create Project
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
