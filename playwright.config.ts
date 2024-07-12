<<<<<<< HEAD
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  testMatch: /.*\.e2e-spec\.ts$/,
=======
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test',
>>>>>>> testes
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
<<<<<<< HEAD
  // reporter: 'html',
  use: {
    baseURL: 'http://localhost:50789',
  },
  webServer: {
    command: 'pnpm dev:test',
    url: 'http://localhost:50789',
    reuseExistingServer: !process.env.CI,
  },

=======
  //reporter: 'html',
  testMatch: /.*\.e2e-spec\.ts$/,
  use: {
    baseURL: "http://localhost:50789"
    // trace: 'on-first-retry',
  },
  webServer: {
    command: "npm run dev:test",
    url: "http://localhost:50789",
    reuseExistingServer: !process.env.CI
  }
>>>>>>> testes
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

<<<<<<< HEAD
=======
  //   /* Test against mobile viewports. */
>>>>>>> testes
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

<<<<<<< HEAD
=======
  //   /* Test against branded browsers. */
>>>>>>> testes
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],
<<<<<<< HEAD
})
=======

});
>>>>>>> testes
