// Veyra CDN assets — temporary placeholders, to be replaced
const CDN = "https://cdn.prod.website-files.com";

export const ASSETS = {
  // Hero face pile portraits
  facepile: [
    `${CDN}/692471abbb363c2d3df6f77e/69284bbf996f0a8507c2521f_Professional%20Portrait.avif`,
    `${CDN}/692471abbb363c2d3df6f77e/69284bbfd536e0083d8dbf36_Portrait%20of%20a%20Man%202.avif`,
    `${CDN}/692471abbb363c2d3df6f77e/69284bbfa48b26edf4827ad0_Smiling%20Man%20Portrait%20(1)%201.avif`,
    `${CDN}/692471abbb363c2d3df6f77e/69284bbfe6fbd5ae1ffdc495_Portrait%20of%20a%20Woman%20(1).avif`,
  ],

  // Segment card backgrounds
  segmentCard1: `${CDN}/692471abbb363c2d3df6f77e/692861fcefca0580c9f75763_Abstract%20Gradient%20Texture%201.avif`,
  segmentCard2: `${CDN}/692471abbb363c2d3df6f77e/692870321083e986d1187197_Man%20Typing%20at%20Desk%201.avif`,

  // Segment card 1 mockup SVG
  segmentCard1Mockup: `${CDN}/692471abbb363c2d3df6f77e/6928626ae2ae3db0e4cf0119_App%20Image%20Wrapper.svg`,

  // Feature section images
  feature1: `${CDN}/692471abbb363c2d3df6f77e/692879ad063bb41219a0c4bf_feature%201.svg`,
  feature2: `${CDN}/692471abbb363c2d3df6f77e/69287deced9e1f23579dd537_feature%203.avif`,

  // Veyra logo SVG (used in comparison etc.)
  logo: `${CDN}/6929512e724e6bf0807a2d69/692959e26f3f170c84b0f264_Group%2014.svg`,

  // Testimonial portraits
  testimonials: [
    `${CDN}/6929512e724e6bf0807a2d69/692959ca152bbc9fcf47d6ba_Woman%20in%20Navy%20Blazer.avif`,
    `${CDN}/6929512e724e6bf0807a2d69/69295a8044a6432a2d7ca6f4_Portrait%20of%20a%20Woman%20(1).avif`,
    `${CDN}/6929512e724e6bf0807a2d69/69295ab0d6d489cb045efba8_Portrait%20of%20a%20Man%202.avif`,
    `${CDN}/6929512e724e6bf0807a2d69/69295adffdd38c5bfc940263_Professional%20Portrait.avif`,
  ],
} as const;
