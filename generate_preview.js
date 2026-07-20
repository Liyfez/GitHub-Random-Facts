const fs = require('fs');
const path = require('path');

// 1. The Theme Configuration
const themes = {
  // --- Dark Themes ---
  dark_blue:        { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DA6FF' },
  dark_red:         { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4D4D' },
  dark_orange:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF974D' },
  dark_yellow:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FFFC4D' },
  dark_green:       { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DFF50' },
  dark_ocean_blue:  { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DFFE4' },
  dark_ocean:       { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DD5FF' },
  dark_indigo:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4D4DFF' },
  dark_purple:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#974DFF' },
  dark_pink:        { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4DED' },
  dark_radical_red: { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4D8E' },
  dracula:          { bgColor: '#282A36', textColor: '#F8F8F2', quoteColor: '#FF79C6' },
  ocean:            { bgColor: '#0F1C2E', textColor: '#A3B8D6', quoteColor: '#38BDAE' },
  midnight:         { bgColor: '#0F141A', textColor: '#C7D1E0', quoteColor: '#5AA6FF' },
  nebula:           { bgColor: '#12171F', textColor: '#E3D7FF', quoteColor: '#B084FF' },
  deep_ocean:       { bgColor: '#131B24', textColor: '#A5C4DA', quoteColor: '#3EE5C7' },
  amethyst:         { bgColor: '#161B22', textColor: '#D6C7FF', quoteColor: '#A05BFF' },
  neo_pink:         { bgColor: '#12171F', textColor: '#F5E9F7', quoteColor: '#FF4DBF' },
  inferno:          { bgColor: '#1A222C', textColor: '#E6C8C8', quoteColor: '#FF6A4D' },
  jade:             { bgColor: '#0F141A', textColor: '#C9F1D0', quoteColor: '#49FF87' },
  arctic:           { bgColor: '#131B24', textColor: '#D4E9F5', quoteColor: '#73D5FF' },
  azure:            { bgColor: '#161B22', textColor: '#BFD8FF', quoteColor: '#4D8CFF' },
  crimson_core:     { bgColor: '#12171F', textColor: '#E9C1C1', quoteColor: '#FF3B6B' },
  blood_moon:       { bgColor: '#0F0505', textColor: '#E5B3B3', quoteColor: '#FF0033' },

  // --- Light Themes ---
  light_blue:       { bgColor: '#D9ECFF', textColor: '#003B73', quoteColor: '#0078D7' },
  light_red:        { bgColor: '#FFD6D6', textColor: '#800000', quoteColor: '#E60000' },
  light_orange:     { bgColor: '#FFE5CC', textColor: '#8C4000', quoteColor: '#FF7300' },
  light_yellow:     { bgColor: '#FFF5CC', textColor: '#735900', quoteColor: '#D4A000' },
  light_green:      { bgColor: '#D6F5D6', textColor: '#004D00', quoteColor: '#009900' },
  light_ocean_blue: { bgColor: '#CCF5F0', textColor: '#004D40', quoteColor: '#00B398' },
  light_ocean:      { bgColor: '#CCEFFF', textColor: '#004C80', quoteColor: '#0099FF' },
  light_indigo:     { bgColor: '#E0E0FF', textColor: '#202080', quoteColor: '#4D4DFF' },
  light_purple:     { bgColor: '#ECD9FF', textColor: '#400080', quoteColor: '#8C1AFF' },
  light_pink:       { bgColor: '#FFD9FA', textColor: '#80006B', quoteColor: '#FF1AE6' },
  light_radical_red:{ bgColor: '#FFD6E6', textColor: '#800033', quoteColor: '#FF1A75' },
  frost:            { bgColor: '#D4F1F4', textColor: '#05445E', quoteColor: '#189AB4' },
  polar_day:        { bgColor: '#FDFBF7', textColor: '#1E3D59', quoteColor: '#FFC13B' },
  silver_mist:      { bgColor: '#E2E8F0', textColor: '#334155', quoteColor: '#94A3B8' },
  cloudveil:        { bgColor: '#FFE4F2', textColor: '#590D22', quoteColor: '#FF8FAB' },
  dawnlight:        { bgColor: '#FFF0D4', textColor: '#5C3A21', quoteColor: '#F08A5D' },
  willow:           { bgColor: '#E0F2E9', textColor: '#204E4A', quoteColor: '#4CAF50' },
  tide:             { bgColor: '#C2F0FC', textColor: '#004C6D', quoteColor: '#0096C7' },
  ether:            { bgColor: '#EFE6FF', textColor: '#240046', quoteColor: '#9D4EDD' },
  nimbus:           { bgColor: '#D9E2E8', textColor: '#2B2D42', quoteColor: '#8D99AE' },
  crystal:          { bgColor: '#E0FFFF', textColor: '#0B0C10', quoteColor: '#66FCF1' },
  matcha_latte:     { bgColor: '#E8F5E9', textColor: '#1B5E20', quoteColor: '#8BC34A' },
  sunset_glow:      { bgColor: '#FFEBEE', textColor: '#BF360C', quoteColor: '#FF5722' },
  lavender_mist:    { bgColor: '#F3E5F5', textColor: '#4A148C', quoteColor: '#AB47BC' }
};

// 2. Create the directory
const outputDir = './assets/themes';
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// 3. Generate SVGs
Object.keys(themes).forEach(key => {
    const t = themes[key];
    const svgContent = `<svg width="260" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="260" height="80" rx="10" fill="${t.bgColor}"/>
  <text x="20" y="50" fill="${t.quoteColor}" font-family="Georgia" font-size="32">“</text>
  <text x="130" y="50" text-anchor="middle" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="18" fill="${t.textColor}">${key}</text>
  <text x="240" y="50" fill="${t.quoteColor}" font-family="Georgia" font-size="32">”</text>
</svg>`;
    
    fs.writeFileSync(path.join(outputDir, `${key}.svg`), svgContent);
    console.log(`Generated ${key}.svg`);
});

console.log('✅ All theme previews generated in /assets/themes/');