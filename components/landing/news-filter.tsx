"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Languages } from "lucide-react"

interface NewsFilterProps {
  selectedCountry: string
  selectedLanguage: string
  onCountryChange: (country: string) => void
  onLanguageChange: (language: string) => void
}

export function NewsFilter({ selectedCountry, selectedLanguage, onCountryChange, onLanguageChange }: NewsFilterProps) {
  const countries = [
    { value: "all", label: "All Countries" },
    { value: "us", label: "🇺🇸 United States" },
    { value: "gb", label: "🇬🇧 United Kingdom" },
    { value: "in", label: "🇮🇳 India" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "au", label: "🇦🇺 Australia" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
  ]

  const languages = [
    { value: "en", label: "English" },
    { value: "de", label: "German" },
    { value: "fr", label: "French" },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-gray-400" />
        <Select value={selectedCountry || "all"} onValueChange={value => onCountryChange(value === "all" ? "" : value)}>
          <SelectTrigger className="w-48 bg-gray-800 border-gray-600 text-white">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value} className="text-white hover:bg-gray-700">
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Languages className="w-4 h-4 text-gray-400" />
        <Select value={selectedLanguage} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-40 bg-gray-800 border-gray-600 text-white">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value} className="text-white hover:bg-gray-700">
                {language.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
