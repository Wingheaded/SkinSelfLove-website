"use client";

import { useState } from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Susana",
    role: "CEO",
    image:
      "/Team/Susana.jpg",
    social: { linkedin: "#" },
  },
  {
    id: "2",
    name: "Alexandra",
    role: "TBD",
    image:
      "/Team/Alexandra.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "3",
    name: "Claudia",
    role: "TBD",
    image:
      "/Team/Claudia.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "4",
    name: "Antonio",
    role: "TBD",
    image:
      "/Team/Antonio.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "5",
    name: "Adelaide",
    role: "TBD",
    image:
      "/Team/Adelaide.jpg",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "Beatriz",
    role: "TBD",
    image:
      "/Team/Beatriz.jpg",
    social: { linkedin: "#" },
  },
  {
    id: "7",
    name: "Jose",
    role: "TBD",
    image:
      "/Team/JOse.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "8",
    name: "Silvia ",
    role: "TBD",
    image:
      "/Team/Mariana.jpg",
    social: { linkedin: "#" },
  },
  {
    id: "9",
    name: "Nadia",
    role: "TBD",
    image:
      "/Team/Nadia.jpg",
    social: { linkedin: "#", behance: "#" },
  },
  {
    id: "10",
    name: "Rute",
    role: "TBD",
    image:
      "/Team/Rute.jpg",
    social: { linkedin: "#" },
  },
  {
    id: "11",
    name: "Mariana",
    role: "TBD",
    image:
      "/Team/Silvia.jpg",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    id: "12",
    name: "Diogo",
    role: "Oral Health Advisor",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face&q=80",
    social: { linkedin: "#" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex w-full max-w-5xl select-none flex-col items-start gap-8 px-4 py-8 font-sans md:flex-row md:gap-10 md:px-6 lg:gap-14">
      {/* Left: photo grid */}
      <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[120px] w-[110px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="mt-[48px] flex flex-col gap-2 sm:mt-[56px] md:mt-[68px] md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[132px] w-[122px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="mt-[22px] flex flex-col gap-2 sm:mt-[26px] md:mt-[32px] md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[125px] w-[115px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* Right: member name list */}
      <div className="flex w-full flex-1 flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-500",
        className,
        isDimmed ? "opacity-60" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1)"
            : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name row
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-3 w-4 flex-shrink-0 rounded-[5px] transition-all duration-300",
            isActive
              ? "w-5 bg-[#1A1A1A]"
              : "bg-[#1A1A1A]/25",
          )}
        />
        <span
          className={cn(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]",
            isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/80",
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              "ml-0.5 flex items-center gap-1.5 transition-all duration-200",
              isActive
                ? "translate-x-0 opacity-100"
                : "-translate-x-2 pointer-events-none opacity-0",
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1 text-[#6b7280] transition-all duration-150 hover:scale-110 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1 text-[#6b7280] transition-all duration-150 hover:scale-110 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1 text-[#6b7280] transition-all duration-150 hover:scale-110 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded p-1 text-[#6b7280] transition-all duration-150 hover:scale-110 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[7px] font-medium uppercase tracking-[0.2em] text-[#6b7280] md:text-[10px]">
        {member.role}
      </p>
    </div>
  );
}
