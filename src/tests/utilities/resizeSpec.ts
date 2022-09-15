import resizeTo from '../../utilities/resize';

import fs from 'fs';

it('Resized image exists in processed_images folder', async () => {
  await resizeTo('attack', 200, 200);
  const processedImage = './processed_images/attack.jpg';
  expect(fs.existsSync(processedImage)).toBeTruthy();
});
