# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: napCommerce.spec.js >> nopCommerce Basic Test Cases >> TC06 Open Computers category
- Location: tests\napCommerce.spec.js:45:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "Computers"
Received string:    "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a024b4be7d5fcf58Performance and Security by CloudflarePrivacy"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('body')
    10 × locator resolved to <body>…</body>
       - unexpected value ""
    20 × locator resolved to <body>…</body>
       - unexpected value "demo.nopcommerce.comPerforming security verificationThis website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.Verification successful. Waiting for demo.nopcommerce.com to respondRay ID: a024b4be7d5fcf58Performance and Security by CloudflarePrivacy"

```

```yaml
- main:
  - heading "demo.nopcommerce.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a024b4be7d5fcf58
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

```
Tearing down "context" exceeded the test timeout of 60000ms.
```