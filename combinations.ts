import { of, interval, zip, combineLatest, forkJoin } from 'rxjs';
import { map, delay, take, tap, withLatestFrom } from 'rxjs/operators';

import { colors } from './helpers';

console.clear();

// ZIP

const zip_obs1 = interval(200).pipe(
  map(v => ({
    value: v,
    color: colors[0]
  })),
);

const zip_obs2 = interval(1000).pipe(
  map(v => ({
    value: v,
    color: colors[1]
  })),
);

const zip_obs3 = interval(2000).pipe(
  map(v => ({
    value: v,
    color: colors[3]
  }),
  delay(3000)
  ),
);

// const sub = zip(zip_obs1, zip_obs2, zip_obs3, (val1, val2, val3) =>
//   [
//     `[ %c${val1.value}, %c${val2.value}, %c${val3.value} %c]`,
//     `color: ${val1.color}`,
//     `color: ${val2.color}`,
//     `color: ${val3.color}`, 
//     ``
//   ]
// ).subscribe(val => {
//   console.log(...val)
// })

// setTimeout(() => {
//   sub.unsubscribe();
// }, 10000)


// COMBINE LATEST

const combine_latest_obs1 = interval(200).pipe(
  map(v => ({
    value: v,
    color: colors[0]
  })),
);

const combine_latest_obs2 = interval(1000).pipe(
  map(v => ({
    value: v,
    color: colors[1]
  })),
);

const combine_latest_obs3 = interval(2000).pipe(
  map(v => ({
    value: v,
    color: colors[3]
  }),
  delay(3000)
  ),
);

// const sub = combineLatest(combine_latest_obs1, combine_latest_obs2, combine_latest_obs3, (val1, val2, val3) =>
//   [
//     `[ %c${val1.value}, %c${val2.value}, %c${val3.value} %c]`,
//     `color: ${val1.color}`,
//     `color: ${val2.color}`,
//     `color: ${val3.color}`, 
//     ``
//   ]
// ).subscribe(val => {
//   console.log(...val)
// })

// setTimeout(() => {
//   sub.unsubscribe();
// }, 10000)

// FORK JOIN

const fork_join_obs1 = of('First Response').pipe(delay(1500));

const fork_join_obs2 = of('Second Response').pipe(delay(400));

const fork_join_obs3 = of('Third Response').pipe(delay(5000));

// console.time('fork');
// const sub = forkJoin(fork_join_obs1, fork_join_obs2, fork_join_obs3).subscribe(val => {
//   console.log(val)
//   console.timeEnd('fork');  
// });

// WITH LATEST FROM

const with_latest_from_obs = interval(1000).pipe(
  map(v => `outer ${v}`),
  withLatestFrom(
    interval(1500).pipe(
      map(v => `inner ${v}`),
      delay(2000)
    ),
    (v1, v2) => `${v1} - ${v2}`
  )
)

const sub = with_latest_from_obs.subscribe(v => {
  console.log(v)
})

setTimeout(() => {
  sub.unsubscribe();
}, 10000)

