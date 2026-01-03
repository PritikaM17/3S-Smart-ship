import { HierarchyNode } from '../types';

export const hierarchyData: HierarchyNode = {
  id: "root",
  name: "Equipments",
  type: "equipment_type",
  children: [
    {
      id: "engine",
      name: "Engine",
      type: "equipment",
      children: [
        {
          id: "main-engine-propulsion",
          name: "Main Engine & Propulsion",
          type: "equipment",
          children: [
            {
              id: "main-engine",
              name: "Main Engine",
              type: "equipment",
              children: [
                {
                  id: "air-exhaust-system",
                  name: "Air and exhaust system",
                  type: "assembly",
                  children: [
                    {
                      id: "me-turbocharger",
                      name: "ME turbocharger",
                      type: "component",
                      children: [
                        {
                          id: "spare-parts-box",
                          name: "Spare Parts Box",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal",
                          name: "seal",
                          type: "component",
                          children: []
                        },
                        {
                          id: "o-ring",
                          name: "o-ring",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-turbine-side",
                          name: "seal-turbine side",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-compressor-side",
                          name: "seal-compressor side",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-engine-mount",
                          name: "seal-engine mount",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-exhaust-flange",
                          name: "seal-exhaaust flange",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-oil-pan",
                          name: "seal-oil pan",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-intake-manifold",
                          name: "seal-intake manifold",
                          type: "component",
                          children: []
                        },
                        {
                          id: "seal-transmission-case",
                          name: "seal-transmission case",
                          type: "component",
                          children: []
                        }
                      ]
                    },
                    {
                      id: "aux-blower",
                      name: "Aux blower",
                      type: "component",
                      children: []
                    },
                    {
                      id: "aux-blower-2",
                      name: "aux blower 2",
                      type: "component",
                      children: []
                    },
                    {
                      id: "charge-air-cooler",
                      name: "Charge Air cooler",
                      type: "component",
                      children: []
                    },
                    {
                      id: "exhaust-valve-complete",
                      name: "exhaust valve complete",
                      type: "component",
                      children: []
                    }
                  ]
                },
                {
                  id: "fuel-system",
                  name: "fuel system",
                  type: "assembly",
                  children: []
                },
                {
                  id: "cooling-water-system",
                  name: "cooling water system",
                  type: "assembly",
                  children: []
                },
                {
                  id: "cylinder-liner-lubrication",
                  name: "cylinder liner and lubrication",
                  type: "assembly",
                  children: []
                }
              ]
            },
            {
              id: "propeller",
              name: "Propeller",
              type: "assembly",
              children: []
            },
            {
              id: "shafting",
              name: "Shafting",
              type: "assembly",
              children: []
            }
          ]
        },
        {
          id: "power-generation",
          name: "Power Generation",
          type: "assembly",
          children: []
        },
        {
          id: "aux-boiler",
          name: "Aux boiler",
          type: "assembly",
          children: []
        },
        {
          id: "aux-machinery",
          name: "aux machinry",
          type: "assembly",
          children: []
        },
        {
          id: "electrical-automation",
          name: "electrical and automation",
          type: "assembly",
          children: []
        },
        {
          id: "tank-systems",
          name: "Tank Systems",
          type: "assembly",
          children: []
        },
        {
          id: "dp-system",
          name: "DP System",
          type: "assembly",
          children: []
        },
        {
          id: "others",
          name: "Others",
          type: "assembly",
          children: []
        }
      ]
    },
    {
      id: "deck",
      name: "Deck",
      type: "assembly",
      children: []
    },
    {
      id: "accommodation",
      name: "Accomodation",
      type: "assembly",
      children: []
    },
    {
      id: "misc",
      name: "Misc.",
      type: "assembly",
      children: []
    }
  ]
};

