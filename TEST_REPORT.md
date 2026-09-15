# TEST REPORT — Sun Fitness Gym
> Tester: Senior Engg | Segment: Gym | Tier-3

## Build
- [ ] `npm run build` (pending)

## Static QA (generator asserts)
- Phone MISSING → no `tel:` links by design (`data-missing: phone`)
- Maps URL + JSON-LD ExerciseGym schema + H1 with business name
- No lorem ipsum, no invented hours/prices/ratings

## Build result (2026-09-15)
- [x] `npm run build` PASS (vite 5.4.21, 0 warnings)
- dist: index 12.57 kB / CSS 11.59 kB / JS 1.17 kB — under perf budget (<200KB JS, <1.5MB total)

## Static QA (2026-09-15, all PASS)
- [x] no `tel:` links (phone MISSING from CSV — by design, `data-missing: phone`)
- [x] Google Maps URL present (Directions + reviews + contact)
- [x] JSON-LD LocalBusiness schema present, H1 contains business name
- [x] title<=60 chars, base path assets OK, no lorem, no invented hours/prices
- [x] aria nav toggle, skip link, favicon present

## Verdict: BUILT + STATIC QA PASS → gh-pages branch deploy
