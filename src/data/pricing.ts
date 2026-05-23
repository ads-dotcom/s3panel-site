import { PricingPlan } from '../interface';

const proFeatureCategories = [
  {
    features: [
      'S3-compatible and Cloudflare R2 connections',
      'Object explorer with folders and breadcrumbs',
      'Upload, download, copy, move, rename, zip, and unzip',
      'Temporary secure sharing links',
      '3-day trial before paid access',
    ],
    limit: 10,
    checks: 2,
  },
  {
    features: [
      'Fast manifest-backed name search',
      'Folder object counts and total sizes',
      'Live content search for selected file types',
      'Bucket and prefix statistics',
      'Large-bucket workflows',
    ],
    limit: 10,
    checks: 2,
  },
  {
    features: [
      'Encrypted connection storage',
      'Permission-aware write actions',
      'Audit logs and admin events',
      'Web app access',
      'Native macOS app access when released',
    ],
    limit: 10,
    checks: 2,
  },
];

export const pricingData: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    featured: false,
    ctaHref: 'https://app.s3panel.com/sign-up',
    ctaLabel: 'Start 3-day trial',
    featureCategories: proFeatureCategories,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    featured: true,
    ctaHref: 'https://app.s3panel.com/sign-up',
    ctaLabel: 'Start 3-day trial',
    featureCategories: proFeatureCategories,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    monthlyPrice: 99.99,
    yearlyPrice: 99.99,
    featured: false,
    ctaHref: 'https://app.s3panel.com/sign-up',
    ctaLabel: 'Start 3-day trial',
    featureCategories: proFeatureCategories,
  },
];
