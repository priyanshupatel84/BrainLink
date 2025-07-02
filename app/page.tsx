import { HeroSection } from "@/components/landing/hero-section"
import { NewsSection } from "@/components/landing/news-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { NewsIntegrationSection } from "@/components/landing/news-integration-section"
import DemoSection from  "@/components/landing/demo-section"

import { CTAFooterSection } from "@/components/landing/cta-footer-section"
import TestSignInPage from "@/components/landing/test-signin"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <NewsSection />
      <FeaturesSection />
      <NewsIntegrationSection />
      <DemoSection />
      <CTAFooterSection />
      {/* <TestSignInPage/> */}
    </div>
  )
}
