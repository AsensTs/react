import React, { Component, lazy, Suspense } from 'react'
const OtherComponent = lazy(() => import('./OtherComponent'));

type Props = {}

type State = {}

export default class suspense_lazy extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent></OtherComponent>
      </Suspense>
    )
  }
}