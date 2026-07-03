import { Factory, FileCheck, FlaskConical, Gauge, GitBranch, Verified, Waves, Wind } from "lucide-react";

export const services = [
    {
        Icon : FileCheck,
        heading: "Automated MDR Compilation",
        description: "Parse, validate and assemble every certificate, weld map and test report into a single audit-ready documentation pack, guaranteeing zero-error handovers."
    },
    {
        Icon : GitBranch,
        heading: "Digital Weld Tracking",
        description: "A live traceability matrix linking welder qualifications, WPS, heat numbers and NDT results across every joint, spool and assembly."
    },
    {
        Icon : Verified,
        heading: "Compliance Automation",
        description: "Continuous verification against DNV, EN, ASME and client specifications, with exception flags raised the moment data drifts from spec."
    },
]
export const steps = [
    {
        heading: "Field Data Input",
        description : "Welder logs, MTRs, NDT reports and inspection records ingested from site, lab and supplier systems."
    },
    {
        heading: "Automated Verification Engine",
        description : "Rules built by metallurgists and QA engineers cross-check every record against project specifications and codes."
    },
    {
        heading: "Audit-Ready Deliverables",
        description : "A structured, hyperlinked MDR and traceability matrix issued to client, certifying body and operator in hours, not weeks."
    }
]

export const heritage = [
  {
    heading: "Offshore Wind Structures",
    description:
      "Heavy-wall monopile, transition piece and jacket fabrication — full weld traceability against DNV-ST-0126 and project class rules.",
    icon: Waves,
  },
  {
    heading: "High-Pressure Pipelines",
    description:
      "Cross-country transmission lines with full mapping of welder qualifications, heat numbers, hydrotest and UT certification.",
    icon: Gauge,
  },
  {
    heading: "Heavy Steel Fabrication",
    description:
      "Spools, pressure vessels and large welded assemblies — verification of WPS/PQR coverage and dimensional inspection records.",
    icon: Factory,
  },
  {
    heading: "Petrochemical Plants",
    description:
      "Process piping, columns and reactors compiled into hyperlinked MDR packs aligned with EN, ASME and operator standards.",
    icon: FlaskConical,
  },
];

export const platfrom = [
  {
    heading: "Automated MDR Verification",
    description:
      "Spec-driven parsing and validation of every document in the manufacturing data record — issued as a structured, hyperlinked deliverable.",
  },
  {
    heading: "Weld Traceability Matrix",
    description:
      "Live joint-by-joint mapping of WPS, welder, heat numbers and NDT results, ready for client and certifying body audit.",
  },
  {
    heading: "Compliance Intelligence Engine",
    description:
      "Continuous monitoring against DNV, EN, ASME and project specifications, surfacing exceptions before they reach handover.",
  }
];

export const outcomes = [
  {
    icon: Gauge,
    percentage: "70%",
    heading: "Faster Project Handover",
    description: "Compress MDR compilation and final review from weeks to days through automated verification and assembly."
  },
  {
    icon: Verified,
    percentage: "0",
    heading: "Audit Data Failures",
    description: "Every certificate, weld map and test report is checked against project specification before it enters the dossier."
  },
  {
    icon: GitBranch,
    percentage: "100%",
    heading: "Traceability Coverage",
    description: "Joint-level linkage from welder qualification through NDT result to as-built record across the entire asset."
  }
]

export const studies = [
  {
    hoverColor: "orange",
    tagline: "Offshore Wind Support",
    heading: "North Sea Offshore Wind Grid",
    description:
      "Deployed to automate the tracking and validation of thousands of material test reports (MTR) and non-destructive testing (NDT) logs for heavy-wall steel structures. Successfully cross-referenced 100% of weld tracking data against strict maritime requirements.",
  },
  {
    hoverColor: "blue",
    tagline: "Pipeline Infrastructure Support",
    heading: "European High-Pressure Transmission Pipeline",
    description:
      "Used to manage automated consistency checks across multi-kilometer pipeline segments. Digitally mapped welder qualifications, heat numbers, and ultrasonic test (UT) certificates to build an unalterable, audit-ready As-Built package.",
  },
  {
    hoverColor: "primary-accent",
    tagline: "Process & Plant Infrastructure Support",
    heading: "Central European Petrochemical Expansion Project",
    description:
      "Integrated into the quality workflow to accelerate the final documentation review. The system parsed and verified compliance for extensive piping spools and pressure vessels, cutting final handover package compilation time by over 60%.",
  },
];