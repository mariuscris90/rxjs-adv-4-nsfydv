import { interval, merge, concat } from 'rxjs'; 
import { map, delay, mergeMap, concatMap, switchMap, exhaustMap, take, tap, exhaust } from 'rxjs/operators';

import { colors } from './helpers';

console.clear();

// MERGE

// const merge_obs1 = interval(1000).pipe(
//   map( v => ({
//     value: v,
//     color: colors[0]
//   })),
// );

// const merge_obs2 = interval(1000).pipe(
//   map( v => ({
//     value: v,
//     color: colors[1]
//   })),
//   delay(333)
// );

// const merge_obs3 = interval(1000).pipe(
//   map( v => ({
//     value: v,
//     color: colors[2]
//   })),
//   delay(666)
// );

// merge(merge_obs1, merge_obs2, merge_obs3).subscribe(val => {
//   console.log(`%c${val.value}`, `color: ${val.color}`);
// })



// MERGE MAP

// const merge_map_obs = interval(2000)
//   .pipe(
//     tap(() => console.log('------------')),
//     mergeMap(v => interval(500)
//       .pipe(
//         map(val => ({
//           value: val,
//           color: colors[v]
//         })),
//       )
//     )
//   )

// const sub = merge_map_obs.subscribe(val => {
//   console.log(`%c${val.value}`, `color: ${val.color}`);
// })

// setTimeout(() => {
//   sub.unsubscribe();
// }, 11000)


// CONCAT

const concat_obs1 = interval(500).pipe(
  map( v => ({
    value: v,
    color: colors[0]
  })),
  take(5)
);

const concat_obs2 = interval(800).pipe(
  map( v => ({
    value: v,
    color: colors[1]
  })),
  take(5)
);

const concat_obs3 = interval(300).pipe(
  map( v => ({
    value: v,
    color: colors[2]
  })),
  take(5)
);

// concat(concat_obs1, concat_obs2, concat_obs3).subscribe(val => {
//   console.log(`%c${val.value}`, `color: ${val.color}`);
// })

// CONCAT MAP

const concat_map_obs = interval(2000)
  .pipe(
    tap(() => console.log('------------')),
    concatMap(v => interval(500)
      .pipe(
        map(val => ({
          value: val,
          color: colors[v]
        })),
        take(6)
      ), 
    )
  )

// const sub = concat_map_obs.subscribe(val => {
//   console.log(`%c${val.value}`, `color: ${val.color}`);
// })

// setTimeout(() => {
//   sub.unsubscribe();
// }, 11000);


// SWITCH MAP

const switch_map_obs = interval(2000)
  .pipe(
    tap(() => console.log('------------')),
    switchMap(v => interval(500)
      .pipe(
        map(val => ({
          value: val,
          color: colors[v]
        })),
      ), 
    )
  )

// const sub = switch_map_obs.subscribe(val => {
//   console.log(`%c${val.value}`, `color: ${val.color}`);
// })

// setTimeout(() => {
//   sub.unsubscribe();
// }, 10000);


// EXHAUST MAP

const exhaust_map_obs = interval(2000)
  .pipe(
    tap(() => console.log('------------')),
    exhaustMap(v => interval(500)
      .pipe(
        map(val => ({
          value: val,
          color: colors[v]
        })),
        take(5)
      ), 
    )
  )

const sub = exhaust_map_obs.subscribe(val => {
  console.log(`%c${val.value}`, `color: ${val.color}`);
})

setTimeout(() => {
  sub.unsubscribe();
}, 10000);