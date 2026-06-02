"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import screenshot from "@/public/dashboard-2.png";

export function MobileApp() {
  return (
    <motion.section
      id="mobile"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] items-center">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <span className="text-primary font-semibold text-sm">MOBILE EXPERIENCE</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            A mobile-first workflow for work, hiring, and payments.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Use Gibwork on your phone or browser to post jobs, manage progress, and settle crypto payments with secure wallet integration.
          </p>
        </motion.div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manage work on the go</CardTitle>
              <CardDescription>
                Create, review, and approve tasks from mobile without losing momentum.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Wallet-native payouts</CardTitle>
              <CardDescription>
                Pay contributors immediately using Solana wallets and stablecoins.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sync across devices</CardTitle>
              <CardDescription>
                Keep project updates, messages, and rewards aligned across phone and desktop.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12 rounded-3xl overflow-hidden border bg-muted shadow-sm"
      >
        <Image alt="Gibwork app preview" src={screenshot} className="w-full h-auto" />
      </motion.div>
    </motion.section>
  );
}
