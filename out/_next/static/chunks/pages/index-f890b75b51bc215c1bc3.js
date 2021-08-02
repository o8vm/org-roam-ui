;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    374: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          Graph: function () {
            return je
          },
          GraphPage: function () {
            return pe
          },
          default: function () {
            return fe
          },
        })
      var r = t(7757),
        i = t.n(r),
        o = t(2137),
        l = t(5893),
        a = t(7329),
        s = t(6156),
        c = t(4699),
        u = t(7294)
      function d(e, n) {
        var t,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = h(e, null !== (t = r.storage) && void 0 !== t ? t : localStorage),
          o = i.get(),
          l = void 0 !== o ? o : n
        l !== o && i.update(l)
        var a = (0, u.useState)(l),
          s = a[0],
          c = a[1]
        ;(0, u.useEffect)(
          function () {
            s !== l && c(l)
          },
          [e],
        )
        var d = function (e) {
          e instanceof Function
            ? c(function (n) {
                var t = e(n)
                return i.update(t), t
              })
            : (c(e), i.update(e))
        }
        return [s, d]
      }
      function h(e, n) {
        return {
          get: function () {
            var t = n.getItem(e)
            if (t && 'undefined' !== t) return JSON.parse(t)
          },
          update: function (t) {
            n.setItem(e, JSON.stringify(t))
          },
          remove: function () {
            n.removeItem(e)
          },
        }
      }
      var g = t(4533),
        x = t(4309),
        f = t(2351),
        p = t(980),
        j = t(8017),
        m = t(6194),
        v = [],
        b = {}
      for (var C in m.oY)
        for (var y in m.oY[C]) {
          var k = C + y
          'LinearNone' === k && (k = 'Linear'), v.push(k), (b[k] = m.oY[C][y])
        }
      var w = b,
        S = {
          enabled: !0,
          charge: -700,
          collision: !0,
          collisionStrength: 20,
          centering: !0,
          centeringStrength: 0.05,
          linkStrength: 0.1,
          linkIts: 1,
          alphaDecay: 0.02,
          alphaTarget: 0,
          alphaMin: 0,
          velocityDecay: 0.25,
          gravity: 0.3,
          gravityOn: !0,
        },
        O = { orphans: !1, parents: !0, tags: [], nodes: [], links: [], date: [] },
        N = {
          particles: !1,
          particlesNumber: 0,
          particlesWidth: 4,
          arrows: !1,
          arrowsLength: 1,
          arrowsPos: 0.5,
          arrowsColor: '',
          linkOpacity: 0.8,
          linkWidth: 1,
          nodeRel: 4,
          nodeOpacity: 1,
          nodeResolution: 12,
          labels: 2,
          labelScale: 1.5,
          highlight: !0,
          highlightNodeSize: 2,
          highlightLinkSize: 2,
          highlightAnim: !0,
          animationSpeed: 700,
          algorithmOptions: v,
          algorithmName: 'BackOut',
          linkColorScheme: 'gray.500',
          nodeColorScheme: [
            'red.500',
            'gray.600',
            'yellow.500',
            'green.500',
            'cyan.500',
            'blue.500',
            'pink.500',
            'purple.500',
            'orange.500',
          ],
          nodeHighlight: '',
          linkHighlight: 'purple.500',
          backgroundColor: 'white',
          emacsNodeColor: 'gray.800',
          labelTextColor: 'black',
          labelBackgroundColor: 'white',
          labelBackgroundOpacity: 0.7,
          citeDashes: !0,
          citeDashLength: 35,
          citeGapLength: 15,
          citeLinkColor: 'gray.600',
          citeNodeColor: 'black',
        },
        I = { follow: 'zoom', localSame: 'add', zoomPadding: 200, zoomSpeed: 2e3 },
        z = { highlight: 'hover', local: 'click', follow: 'double' },
        L = t(7375),
        D = t(3924),
        R = t(3986),
        T = t(9641),
        P = t(7546),
        Z = t(3441),
        E = t(6569),
        H = t(4189),
        F = t(454),
        A = t(8420),
        B = t(6699),
        V = t(155),
        M = t(6769),
        X = t(336),
        W = t(2026),
        _ = t(4096),
        U = t(4115),
        Q = t(8134),
        q = t(8235),
        G = t(7273),
        K = t(5267),
        J = t(6049),
        Y = t(3014),
        $ = t(6658),
        ee = t(9356)
      function ne(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function te(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? ne(Object(t), !0).forEach(function (n) {
                ;(0, s.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ne(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      var re = function (e) {
          var n = e.physics,
            t = e.setPhysics,
            r = e.threeDim,
            i = e.setThreeDim,
            o = e.filter,
            s = e.setFilter,
            d = e.visuals,
            h = e.setVisuals,
            g = e.mouse,
            x = e.setMouse,
            f = e.behavior,
            p = e.setBehavior,
            m = (0, u.useState)(!0),
            v = m[0],
            b = m[1],
            C = (0, u.useContext)(ee.N),
            y = C.highlightColor,
            k = C.setHighlightColor,
            w = [
              'red.500',
              'orange.500',
              'yellow.500',
              'green.500',
              'cyan.500',
              'blue.500',
              'pink.500',
              'purple.500',
              'gray.400',
              'gray.500',
              'gray.600',
              'white',
              'gray.100',
              'gray.200',
              'gray.300',
              'gray.400',
              'gray.500',
              'gray.600',
              'gray.700',
              'gray.800',
              'gray.900',
              'black',
            ]
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(F.R, {
                in: !v,
                children: (0, l.jsx)(j.xu, {
                  position: 'absolute',
                  zIndex: 'overlay',
                  marginTop: 10,
                  marginLeft: 10,
                  display: v ? 'none' : 'block',
                  children: (0, l.jsx)(A.h, {
                    'aria-label': 'Settings',
                    icon: (0, l.jsx)(D.e, {}),
                    onClick: function () {
                      return b(!0)
                    },
                  }),
                }),
              }),
              (0, l.jsx)(F.R, {
                in: v,
                children: (0, l.jsxs)(j.xu, {
                  bg: 'alt.100',
                  w: 'xs',
                  marginTop: 10,
                  marginLeft: 10,
                  borderRadius: 'xl',
                  maxH: 650,
                  paddingBottom: 5,
                  zIndex: 300,
                  position: 'relative',
                  boxShadow: 'xl',
                  children: [
                    (0, l.jsxs)(j.xu, {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingRight: 2,
                      paddingTop: 1,
                      children: [
                        (0, l.jsx)(B.u, {
                          label: '2D',
                          children: (0, l.jsx)(V.z, {
                            onClick: function () {
                              return i(!r)
                            },
                            variant: 'ghost',
                            zIndex: 'overlay',
                            children: r ? '3D' : '2D',
                          }),
                        }),
                        (0, l.jsxs)(j.xu, {
                          display: 'flex',
                          alignItems: 'center',
                          children: [
                            (0, l.jsx)(B.u, {
                              label: 'Reset settings to defaults',
                              children: (0, l.jsx)(A.h, {
                                'aria-label': 'Reset Defaults',
                                icon: (0, l.jsx)(R.A, {}),
                                onClick: function () {
                                  h(N), s(O), x(z), t(S), p(I)
                                },
                                variant: 'none',
                                size: 'sm',
                              }),
                            }),
                            (0, l.jsx)(A.h, {
                              size: 'sm',
                              icon: (0, l.jsx)(T.T, {}),
                              'aria-label': 'Close Tweak Panel',
                              variant: 'ghost',
                              onClick: function () {
                                return b(!1)
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)($.ZP, {
                      autoHeight: !0,
                      autoHeightMax: 600,
                      autoHide: !0,
                      renderThumbVertical: function (e) {
                        var n = e.style,
                          t = (0, L.Z)(e, ['style'])
                        return (0, l.jsx)(
                          j.xu,
                          te(
                            te({}, t),
                            {},
                            { style: te(te({}, n), {}, { borderRadius: 10 }), bg: y },
                          ),
                        )
                      },
                      children: (0, l.jsxs)(M.UQ, {
                        allowMultiple: !0,
                        allowToggle: !0,
                        color: 'black',
                        children: [
                          (0, l.jsxs)(M.Qd, {
                            children: [
                              (0, l.jsxs)(M.KF, {
                                children: [
                                  (0, l.jsx)(M.XE, { marginRight: 2 }),
                                  (0, l.jsx)(X.X, { size: 'sm', children: 'Filter' }),
                                ],
                              }),
                              (0, l.jsx)(M.Hk, {
                                children: (0, l.jsxs)(W.gC, {
                                  spacing: 2,
                                  justifyContent: 'flex-start',
                                  divider: (0, l.jsx)(W.cX, { borderColor: 'gray.500' }),
                                  align: 'stretch',
                                  paddingLeft: 7,
                                  color: 'gray.800',
                                  children: [
                                    (0, l.jsxs)(_.k, {
                                      justifyContent: 'space-between',
                                      children: [
                                        (0, l.jsx)(U.x, { children: 'Orphans' }),
                                        (0, l.jsx)(Q.r, {
                                          onChange: function () {
                                            s(te(te({}, o), {}, { orphans: !o.orphans }))
                                          },
                                          isChecked: o.orphans,
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(_.k, {
                                      justifyContent: 'space-between',
                                      children: [
                                        (0, l.jsx)(U.x, {
                                          children: 'Link nodes with parent file',
                                        }),
                                        (0, l.jsx)(Q.r, {
                                          onChange: function () {
                                            s(te(te({}, o), {}, { parents: !o.parents }))
                                          },
                                          isChecked: o.parents,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)(M.Qd, {
                            children: [
                              (0, l.jsx)(M.KF, {
                                display: 'flex',
                                justifyContent: 'space-between',
                                children: (0, l.jsxs)(j.xu, {
                                  display: 'flex',
                                  children: [
                                    (0, l.jsx)(M.XE, { marginRight: 2 }),
                                    (0, l.jsx)(X.X, { size: 'sm', children: 'Physics' }),
                                  ],
                                }),
                              }),
                              (0, l.jsxs)(M.Hk, {
                                children: [
                                  (0, l.jsxs)(W.gC, {
                                    spacing: 2,
                                    justifyContent: 'flex-start',
                                    divider: (0, l.jsx)(W.cX, { borderColor: 'gray.500' }),
                                    align: 'stretch',
                                    paddingLeft: 7,
                                    color: 'gray.800',
                                    children: [
                                      (0, l.jsx)(le, {
                                        label: 'Gravity',
                                        value: n.gravityOn,
                                        onChange: function () {
                                          return t(te(te({}, n), {}, { gravityOn: !n.gravityOn }))
                                        },
                                        children: (0, l.jsx)(oe, {
                                          label: 'Strength',
                                          value: 10 * n.gravity,
                                          onChange: function (e) {
                                            return t(te(te({}, n), {}, { gravity: e / 10 }))
                                          },
                                        }),
                                      }),
                                      (0, l.jsx)(oe, {
                                        value: -n.charge / 100,
                                        onChange: function (e) {
                                          return t(te(te({}, n), {}, { charge: -100 * e }))
                                        },
                                        label: 'Repulsive Force',
                                      }),
                                      (0, l.jsx)(le, {
                                        label: 'Collision',
                                        infoText: 'Perfomance sap, disable if slow',
                                        value: n.collision,
                                        onChange: function () {
                                          return t(te(te({}, n), {}, { collision: !n.collision }))
                                        },
                                        children: (0, l.jsx)(oe, {
                                          value: n.collisionStrength / 5,
                                          onChange: function (e) {
                                            return t(
                                              te(te({}, n), {}, { collisionStrength: 5 * e }),
                                            )
                                          },
                                          label: 'Collision Radius',
                                          infoText:
                                            'Easy with this one, high values can lead to a real jiggly mess',
                                        }),
                                      }),
                                      (0, l.jsx)(oe, {
                                        value: 5 * n.linkStrength,
                                        onChange: function (e) {
                                          return t(te(te({}, n), {}, { linkStrength: e / 5 }))
                                        },
                                        label: 'Link Force',
                                      }),
                                      (0, l.jsx)(oe, {
                                        label: 'Link Iterations',
                                        value: n.linkIts,
                                        onChange: function (e) {
                                          return t(te(te({}, n), {}, { linkIts: e }))
                                        },
                                        min: 0,
                                        max: 6,
                                        step: 1,
                                        infoText:
                                          'How many links down the line the physics of a single node affects (Slow)',
                                      }),
                                      (0, l.jsx)(oe, {
                                        label: 'Viscosity',
                                        value: 10 * n.velocityDecay,
                                        onChange: function (e) {
                                          return t(te(te({}, n), {}, { velocityDecay: e / 10 }))
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)(j.xu, {
                                    children: (0, l.jsx)(M.UQ, {
                                      paddingLeft: 3,
                                      allowToggle: !0,
                                      children: (0, l.jsxs)(M.Qd, {
                                        children: [
                                          (0, l.jsxs)(M.KF, {
                                            children: [
                                              (0, l.jsx)(U.x, { children: 'Advanced' }),
                                              (0, l.jsx)(M.XE, { marginRight: 2 }),
                                            ],
                                          }),
                                          (0, l.jsx)(M.Hk, {
                                            children: (0, l.jsxs)(W.gC, {
                                              spacing: 2,
                                              justifyContent: 'flex-start',
                                              divider: (0, l.jsx)(W.cX, {
                                                borderColor: 'gray.500',
                                              }),
                                              align: 'stretch',
                                              paddingLeft: 3,
                                              color: 'gray.800',
                                              children: [
                                                (0, l.jsx)(oe, {
                                                  label: 'Stabilization rate',
                                                  value: 50 * n.alphaDecay,
                                                  onChange: function (e) {
                                                    return t(
                                                      te(te({}, n), {}, { alphaDecay: e / 50 }),
                                                    )
                                                  },
                                                }),
                                                (0, l.jsx)(le, {
                                                  label: 'Center nodes',
                                                  value: n.centering,
                                                  onChange: function () {
                                                    return t(
                                                      te(
                                                        te({}, n),
                                                        {},
                                                        { centering: !n.centering },
                                                      ),
                                                    )
                                                  },
                                                  infoText:
                                                    'Keeps the nodes in the center of the viewport. If disabled you can drag the nodes anywhere you want.',
                                                  children: (0, l.jsx)(oe, {
                                                    label: 'Centering Strength',
                                                    value: n.centeringStrength,
                                                    max: 2,
                                                    step: 0.01,
                                                    onChange: function (e) {
                                                      return t(
                                                        te(te({}, n), {}, { centeringStrength: e }),
                                                      )
                                                    },
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)(M.Qd, {
                            children: [
                              (0, l.jsxs)(M.KF, {
                                children: [
                                  (0, l.jsx)(M.XE, { marginRight: 2 }),
                                  (0, l.jsx)(X.X, { size: 'sm', children: 'Visual' }),
                                ],
                              }),
                              (0, l.jsx)(M.Hk, {
                                children: (0, l.jsxs)(W.gC, {
                                  justifyContent: 'flex-start',
                                  align: 'stretch',
                                  children: [
                                    (0, l.jsx)(M.UQ, {
                                      allowToggle: !0,
                                      defaultIndex: [0],
                                      paddingLeft: 3,
                                      children: (0, l.jsxs)(M.Qd, {
                                        children: [
                                          (0, l.jsx)(M.KF, {
                                            children: (0, l.jsxs)(_.k, {
                                              justifyContent: 'space-between',
                                              w: '100%',
                                              children: [
                                                (0, l.jsx)(U.x, { children: 'Colors' }),
                                                (0, l.jsx)(M.XE, { marginRight: 2 }),
                                              ],
                                            }),
                                          }),
                                          (0, l.jsx)(M.Hk, {
                                            children: (0, l.jsx)(W.gC, {
                                              spacing: 2,
                                              justifyContent: 'flex-start',
                                              divider: (0, l.jsx)(W.cX, {
                                                borderColor: 'gray.500',
                                              }),
                                              align: 'stretch',
                                              color: 'gray.800',
                                              children: (0, l.jsxs)(j.xu, {
                                                children: [
                                                  (0, l.jsxs)(_.k, {
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    children: [
                                                      (0, l.jsx)(U.x, { children: 'Nodes' }),
                                                      (0, l.jsx)(B.u, {
                                                        label: 'Shuffle node colors',
                                                        children: (0, l.jsx)(A.h, {
                                                          'aria-label': 'Shuffle node colors',
                                                          size: 'sm',
                                                          icon: (0, l.jsx)(P.n, {}),
                                                          variant: 'ghost',
                                                          onClick: function () {
                                                            var e,
                                                              n =
                                                                null !== (e = d.nodeColorScheme) &&
                                                                void 0 !== e
                                                                  ? e
                                                                  : []
                                                            h(
                                                              te(
                                                                te({}, d),
                                                                {},
                                                                {
                                                                  nodeColorScheme: n
                                                                    .map(function (e) {
                                                                      return [Math.random(), e]
                                                                    })
                                                                    .sort(function (e, n) {
                                                                      return (
                                                                        (0, c.Z)(e, 1)[0] -
                                                                        (0, c.Z)(n, 1)[0]
                                                                      )
                                                                    })
                                                                    .map(function (e) {
                                                                      var n = (0, c.Z)(e, 2)
                                                                      n[0]
                                                                      return n[1]
                                                                    }),
                                                                },
                                                              ),
                                                            )
                                                          },
                                                        }),
                                                      }),
                                                      (0, l.jsx)(B.u, {
                                                        label: 'Cycle node colors',
                                                        children: (0, l.jsx)(A.h, {
                                                          'aria-label': 'Shift node colors',
                                                          icon: (0, l.jsx)(Z.L, {}),
                                                          size: 'sm',
                                                          variant: 'ghost',
                                                          onClick: function () {
                                                            var e,
                                                              n =
                                                                null !== (e = d.nodeColorScheme) &&
                                                                void 0 !== e
                                                                  ? e
                                                                  : []
                                                            h(
                                                              te(
                                                                te({}, d),
                                                                {},
                                                                {
                                                                  nodeColorScheme: [].concat(
                                                                    (0, a.Z)(n.slice(1, n.length)),
                                                                    [n[0]],
                                                                  ),
                                                                },
                                                              ),
                                                            )
                                                          },
                                                        }),
                                                      }),
                                                      (0, l.jsxs)(q.v2, {
                                                        placement: 'right',
                                                        closeOnSelect: !1,
                                                        matchWidth: !0,
                                                        children: [
                                                          (0, l.jsx)(q.j2, {
                                                            width: 20,
                                                            as: V.z,
                                                            colorScheme: '',
                                                            color: 'black',
                                                            rightIcon: (0, l.jsx)(E.v, {}),
                                                            children: (0, l.jsx)(_.k, {
                                                              height: 6,
                                                              width: 6,
                                                              flexDirection: 'column',
                                                              flexWrap: 'wrap',
                                                              children: d.nodeColorScheme.map(
                                                                function (e) {
                                                                  return (0, l.jsx)(
                                                                    j.xu,
                                                                    {
                                                                      bgColor: e,
                                                                      flex: '1 1 8px',
                                                                      borderRadius: '2xl',
                                                                    },
                                                                    e,
                                                                  )
                                                                },
                                                              ),
                                                            }),
                                                          }),
                                                          (0, l.jsxs)(G.h, {
                                                            children: [
                                                              ' ',
                                                              (0, l.jsx)(q.qy, {
                                                                minW: 10,
                                                                zIndex: 'popover',
                                                                bgColor: 'gray.200',
                                                                children: (0, l.jsx)(q.__, {
                                                                  width: 500,
                                                                  type: 'checkbox',
                                                                  defaultValue: d.nodeColorScheme,
                                                                  onChange: function (e) {
                                                                    e.length &&
                                                                      h(
                                                                        te(
                                                                          te({}, d),
                                                                          {},
                                                                          { nodeColorScheme: e },
                                                                        ),
                                                                      )
                                                                  },
                                                                  children: w.map(function (e) {
                                                                    return (0, l.jsx)(
                                                                      q.ii,
                                                                      {
                                                                        isChecked:
                                                                          d.nodeColorScheme.some(
                                                                            function (n) {
                                                                              return n === e
                                                                            },
                                                                          ),
                                                                        value: e,
                                                                        isDisabled:
                                                                          1 ===
                                                                            d.nodeColorScheme
                                                                              .length &&
                                                                          d.nodeColorScheme[0] ===
                                                                            e,
                                                                        children: (0, l.jsx)(j.xu, {
                                                                          justifyContent:
                                                                            'space-between',
                                                                          alignItems: 'center',
                                                                          display: 'flex',
                                                                          children: (0, l.jsx)(
                                                                            j.xu,
                                                                            {
                                                                              bgColor: e,
                                                                              borderRadius: 'sm',
                                                                              height: 6,
                                                                              width: 6,
                                                                            },
                                                                          ),
                                                                        }),
                                                                      },
                                                                      e,
                                                                    )
                                                                  }),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)(_.k, {
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    children: [
                                                      (0, l.jsx)(U.x, { children: 'Links' }),
                                                      (0, l.jsxs)(q.v2, {
                                                        placement: 'right',
                                                        children: [
                                                          (0, l.jsx)(q.j2, {
                                                            as: V.z,
                                                            colorScheme: '',
                                                            color: 'black',
                                                            rightIcon: (0, l.jsx)(E.v, {}),
                                                            children: (0, l.jsx)(j.xu, {
                                                              children: d.linkColorScheme
                                                                ? (0, l.jsx)(j.xu, {
                                                                    bgColor: d.linkColorScheme,
                                                                    borderRadius: 'sm',
                                                                    height: 6,
                                                                    width: 6,
                                                                  })
                                                                : (0, l.jsx)(_.k, {
                                                                    height: 6,
                                                                    width: 6,
                                                                    flexDirection: 'column',
                                                                    flexWrap: 'wrap',
                                                                    children: d.nodeColorScheme.map(
                                                                      function (e) {
                                                                        return (0, l.jsx)(
                                                                          j.xu,
                                                                          {
                                                                            bgColor: e,
                                                                            flex: '1 1 8px',
                                                                            borderRadius: '2xl',
                                                                          },
                                                                          e,
                                                                        )
                                                                      },
                                                                    ),
                                                                  }),
                                                            }),
                                                          }),
                                                          (0, l.jsxs)(G.h, {
                                                            children: [
                                                              ' ',
                                                              (0, l.jsxs)(q.qy, {
                                                                minW: 10,
                                                                zIndex: 'popover',
                                                                bgColor: 'gray.200',
                                                                children: [
                                                                  (0, l.jsx)(q.sN, {
                                                                    onClick: function () {
                                                                      return h(
                                                                        te(
                                                                          te({}, d),
                                                                          {},
                                                                          { linkColorScheme: '' },
                                                                        ),
                                                                      )
                                                                    },
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    display: 'flex',
                                                                    children: (0, l.jsx)(_.k, {
                                                                      height: 6,
                                                                      width: 6,
                                                                      flexDirection: 'column',
                                                                      flexWrap: 'wrap',
                                                                      children:
                                                                        d.nodeColorScheme.map(
                                                                          function (e) {
                                                                            return (0, l.jsx)(
                                                                              j.xu,
                                                                              {
                                                                                bgColor: e,
                                                                                flex: '1 1 8px',
                                                                                borderRadius: '2xl',
                                                                              },
                                                                              e,
                                                                            )
                                                                          },
                                                                        ),
                                                                    }),
                                                                  }),
                                                                  w.map(function (e) {
                                                                    return (0, l.jsx)(
                                                                      q.sN,
                                                                      {
                                                                        onClick: function () {
                                                                          return h(
                                                                            te(
                                                                              te({}, d),
                                                                              {},
                                                                              {
                                                                                linkColorScheme: e,
                                                                              },
                                                                            ),
                                                                          )
                                                                        },
                                                                        justifyContent:
                                                                          'space-between',
                                                                        alignItems: 'center',
                                                                        display: 'flex',
                                                                        children: (0, l.jsx)(j.xu, {
                                                                          bgColor: e,
                                                                          borderRadius: 'sm',
                                                                          height: 6,
                                                                          width: 6,
                                                                        }),
                                                                      },
                                                                      e,
                                                                    )
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)(_.k, {
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    children: [
                                                      (0, l.jsx)(U.x, { children: 'Accent' }),
                                                      (0, l.jsxs)(q.v2, {
                                                        placement: 'right',
                                                        children: [
                                                          (0, l.jsx)(q.j2, {
                                                            as: V.z,
                                                            colorScheme: '',
                                                            color: 'black',
                                                            rightIcon: (0, l.jsx)(E.v, {}),
                                                            children: (0, l.jsx)(j.xu, {
                                                              bgColor: y,
                                                              borderRadius: 'sm',
                                                              height: 6,
                                                              width: 6,
                                                            }),
                                                          }),
                                                          (0, l.jsxs)(G.h, {
                                                            children: [
                                                              ' ',
                                                              (0, l.jsx)(q.qy, {
                                                                minW: 10,
                                                                zIndex: 'popover',
                                                                bgColor: 'gray.200',
                                                                children: w.map(function (e) {
                                                                  return (0, l.jsx)(
                                                                    q.sN,
                                                                    {
                                                                      onClick: function () {
                                                                        return k(e)
                                                                      },
                                                                      justifyContent:
                                                                        'space-between',
                                                                      alignItems: 'center',
                                                                      display: 'flex',
                                                                      children: (0, l.jsx)(j.xu, {
                                                                        bgColor: e,
                                                                        borderRadius: 'sm',
                                                                        height: 6,
                                                                        width: 6,
                                                                      }),
                                                                    },
                                                                    e,
                                                                  )
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Link highlight',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'linkHighlight',
                                                    visValue: d.linkHighlight,
                                                  }),
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Node highlight',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'nodeHighlight',
                                                    visValue: d.nodeHighlight,
                                                  }),
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Background',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'backgroundColor',
                                                    visValue: d.backgroundColor,
                                                  }),
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Emacs node',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'emacsNodeColor',
                                                    visValue: d.emacsNodeColor,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, l.jsxs)(W.gC, {
                                      spacing: 2,
                                      justifyContent: 'flex-start',
                                      divider: (0, l.jsx)(W.cX, { borderColor: 'gray.500' }),
                                      align: 'stretch',
                                      paddingLeft: 7,
                                      color: 'gray.800',
                                      children: [
                                        (0, l.jsx)(oe, {
                                          label: 'Node size',
                                          value: d.nodeRel,
                                          onChange: function (e) {
                                            return h(te(te({}, d), {}, { nodeRel: e }))
                                          },
                                        }),
                                        r &&
                                          (0, l.jsxs)(l.Fragment, {
                                            children: [
                                              (0, l.jsx)(oe, {
                                                label: 'Node opacity',
                                                value: d.nodeOpacity,
                                                min: 0,
                                                max: 1,
                                                onChange: function (e) {
                                                  return h(te(te({}, d), {}, { nodeOpacity: e }))
                                                },
                                              }),
                                              (0, l.jsx)(oe, {
                                                label: 'Node resolution',
                                                value: d.nodeResolution,
                                                min: 5,
                                                max: 32,
                                                step: 1,
                                                onChange: function (e) {
                                                  return h(te(te({}, d), {}, { nodeResolution: e }))
                                                },
                                              }),
                                            ],
                                          }),
                                        (0, l.jsx)(oe, {
                                          label: 'Link width',
                                          value: d.linkWidth,
                                          onChange: function (e) {
                                            return h(te(te({}, d), {}, { linkWidth: e }))
                                          },
                                        }),
                                        r &&
                                          (0, l.jsx)(oe, {
                                            label: 'Link opacity',
                                            min: 0,
                                            max: 1,
                                            value: d.linkOpacity,
                                            onChange: function (e) {
                                              return h(te(te({}, d), {}, { linkOpacity: e }))
                                            },
                                          }),
                                        (0, l.jsxs)(le, {
                                          label: 'Dash cite links',
                                          infoText:
                                            'Add dashes to citation links made with org-roam-bibtex',
                                          value: d.citeDashes,
                                          onChange: function () {
                                            return h(
                                              te(te({}, d), {}, { citeDashes: !d.citeDashes }),
                                            )
                                          },
                                          children: [
                                            (0, l.jsx)(oe, {
                                              label: 'Dash length',
                                              value: d.citeDashLength / 10,
                                              onChange: function (e) {
                                                return h(
                                                  te(te({}, d), {}, { citeDashLength: 10 * e }),
                                                )
                                              },
                                            }),
                                            (0, l.jsx)(oe, {
                                              label: 'Gap length',
                                              value: d.citeGapLength / 5,
                                              onChange: function (e) {
                                                return h(
                                                  te(te({}, d), {}, { citeGapLength: 5 * e }),
                                                )
                                              },
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)(ae, {
                                          colorList: w,
                                          label: 'Citation node color',
                                          visuals: d,
                                          setVisuals: h,
                                          value: 'citeNodeColor',
                                          visValue: d.citeNodeColor,
                                        }),
                                        (0, l.jsx)(ae, {
                                          colorList: w,
                                          label: 'Citationlink color',
                                          visuals: d,
                                          setVisuals: h,
                                          value: 'citeLinkColor',
                                          visValue: d.citeLinkColor,
                                        }),
                                        (0, l.jsxs)(j.xu, {
                                          children: [
                                            (0, l.jsxs)(_.k, {
                                              alignItems: 'center',
                                              justifyContent: 'space-between',
                                              children: [
                                                (0, l.jsx)(U.x, { children: 'Labels' }),
                                                (0, l.jsxs)(q.v2, {
                                                  placement: 'right',
                                                  children: [
                                                    (0, l.jsx)(q.j2, {
                                                      as: V.z,
                                                      colorScheme: '',
                                                      color: 'black',
                                                      rightIcon: (0, l.jsx)(E.v, {}),
                                                      children: d.labels
                                                        ? d.labels < 2
                                                          ? 'On Highlight'
                                                          : 'Always'
                                                        : 'Never',
                                                    }),
                                                    (0, l.jsxs)(G.h, {
                                                      children: [
                                                        ' ',
                                                        (0, l.jsxs)(q.qy, {
                                                          zIndex: 'popover',
                                                          bgColor: 'gray.200',
                                                          children: [
                                                            (0, l.jsx)(q.sN, {
                                                              onClick: function () {
                                                                return h(
                                                                  te(te({}, d), {}, { labels: 0 }),
                                                                )
                                                              },
                                                              children: 'Never',
                                                            }),
                                                            (0, l.jsx)(q.sN, {
                                                              onClick: function () {
                                                                return h(
                                                                  te(te({}, d), {}, { labels: 1 }),
                                                                )
                                                              },
                                                              children: 'On Highlight',
                                                            }),
                                                            (0, l.jsx)(q.sN, {
                                                              onClick: function () {
                                                                return h(
                                                                  te(te({}, d), {}, { labels: 2 }),
                                                                )
                                                              },
                                                              children: 'Always',
                                                            }),
                                                            (0, l.jsx)(q.sN, {
                                                              onClick: function () {
                                                                return h(
                                                                  te(te({}, d), {}, { labels: 3 }),
                                                                )
                                                              },
                                                              children: 'Always (even in 3D)',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsx)(K.U, {
                                              in: d.labels > 0,
                                              animateOpacity: !0,
                                              children: (0, l.jsxs)(W.gC, {
                                                spacing: 1,
                                                justifyContent: 'flex-start',
                                                divider: (0, l.jsx)(W.cX, {
                                                  borderColor: 'gray.400',
                                                }),
                                                align: 'stretch',
                                                paddingLeft: 2,
                                                color: 'gray.800',
                                                children: [
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Text',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'labelTextColor',
                                                    visValue: d.labelTextColor,
                                                  }),
                                                  (0, l.jsx)(ae, {
                                                    colorList: w,
                                                    label: 'Text',
                                                    visuals: d,
                                                    setVisuals: h,
                                                    value: 'labelBackgroundColor',
                                                    visValue: d.labelBackgroundColor,
                                                  }),
                                                  (0, l.jsx)(K.U, {
                                                    in: !!d.labelBackgroundColor,
                                                    animateOpacity: !0,
                                                    children: (0, l.jsx)(j.xu, {
                                                      paddingTop: 2,
                                                      children: (0, l.jsx)(oe, {
                                                        label: 'Background opacity',
                                                        value: d.labelBackgroundOpacity,
                                                        onChange: function (e) {
                                                          console.log(d.labelBackgroundOpacity),
                                                            h(
                                                              te(
                                                                te({}, d),
                                                                {},
                                                                { labelBackgroundOpacity: e },
                                                              ),
                                                            )
                                                        },
                                                        min: 0,
                                                        max: 1,
                                                        step: 0.01,
                                                      }),
                                                    }),
                                                  }),
                                                  (0, l.jsx)(K.U, {
                                                    in: d.labels > 1,
                                                    animateOpacity: !0,
                                                    children: (0, l.jsx)(j.xu, {
                                                      paddingTop: 2,
                                                      children: (0, l.jsx)(oe, {
                                                        label: 'Label Appearance Scale',
                                                        value: 5 * d.labelScale,
                                                        onChange: function (e) {
                                                          return h(
                                                            te(
                                                              te({}, d),
                                                              {},
                                                              { labelScale: e / 5 },
                                                            ),
                                                          )
                                                        },
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)(le, {
                                          label: 'Link arrows',
                                          value: d.arrows,
                                          onChange: function () {
                                            return h(te(te({}, d), {}, { arrows: !d.arrows }))
                                          },
                                          children: [
                                            (0, l.jsx)(oe, {
                                              label: 'Arrow size',
                                              value: d.arrowsLength / 10,
                                              onChange: function (e) {
                                                return h(
                                                  te(te({}, d), {}, { arrowsLength: 10 * e }),
                                                )
                                              },
                                            }),
                                            (0, l.jsx)(oe, {
                                              label: 'Arrow Position',
                                              value: d.arrowsPos,
                                              min: 0,
                                              max: 1,
                                              step: 0.01,
                                              onChange: function (e) {
                                                return h(te(te({}, d), {}, { arrowsPos: e }))
                                              },
                                            }),
                                            (0, l.jsx)(ae, {
                                              colorList: w,
                                              label: 'Arrow Color',
                                              visuals: d,
                                              setVisuals: h,
                                              value: 'arrowsColor',
                                              visValue: d.arrowsColor,
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)(le, {
                                          label: 'Directional Particles',
                                          value: d.particles,
                                          onChange: function () {
                                            return h(te(te({}, d), {}, { particles: !d.particles }))
                                          },
                                          children: [
                                            (0, l.jsx)(oe, {
                                              label: 'Particle Number',
                                              value: d.particlesNumber,
                                              max: 5,
                                              step: 1,
                                              onChange: function (e) {
                                                return h(te(te({}, d), {}, { particlesNumber: e }))
                                              },
                                            }),
                                            (0, l.jsx)(oe, {
                                              label: 'Particle Size',
                                              value: d.particlesWidth,
                                              onChange: function (e) {
                                                return h(te(te({}, d), {}, { particlesWidth: e }))
                                              },
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)(le, {
                                          label: 'Highlight',
                                          onChange: function () {
                                            return h(te(te({}, d), {}, { highlight: !d.highlight }))
                                          },
                                          value: d.highlight,
                                          children: (0, l.jsxs)(W.gC, {
                                            spacing: 1,
                                            justifyContent: 'flex-start',
                                            divider: (0, l.jsx)(W.cX, { borderColor: 'gray.400' }),
                                            align: 'stretch',
                                            paddingLeft: 0,
                                            children: [
                                              (0, l.jsx)(oe, {
                                                label: 'Highlight Link Thickness',
                                                value: d.highlightLinkSize,
                                                onChange: function (e) {
                                                  return h(
                                                    te(te({}, d), {}, { highlightLinkSize: e }),
                                                  )
                                                },
                                              }),
                                              (0, l.jsx)(oe, {
                                                label: 'Highlight Node Size',
                                                value: d.highlightNodeSize,
                                                onChange: function (e) {
                                                  return h(
                                                    te(te({}, d), {}, { highlightNodeSize: e }),
                                                  )
                                                },
                                              }),
                                              (0, l.jsxs)(le, {
                                                label: 'Highlight Animation',
                                                onChange: function () {
                                                  h(
                                                    te(
                                                      te({}, d),
                                                      {},
                                                      { highlightAnim: !d.highlightAnim },
                                                    ),
                                                  )
                                                },
                                                value: d.highlightAnim,
                                                children: [
                                                  (0, l.jsx)(oe, {
                                                    label: 'Animation speed',
                                                    onChange: function (e) {
                                                      return h(
                                                        te(te({}, d), {}, { animationSpeed: e }),
                                                      )
                                                    },
                                                    value: d.animationSpeed,
                                                    infoText:
                                                      'Slower speed has a chance of being buggy',
                                                    min: 50,
                                                    max: 1e3,
                                                    step: 10,
                                                  }),
                                                  (0, l.jsx)(J.Ph, {
                                                    placeholder: d.algorithmName,
                                                    onChange: function (e) {
                                                      h(
                                                        te(
                                                          te({}, d),
                                                          {},
                                                          { algorithmName: e.target.value },
                                                        ),
                                                      )
                                                    },
                                                    children: d.algorithmOptions.map(function (e) {
                                                      return (0,
                                                      l.jsx)('option', { value: e, children: e }, e)
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)(M.Qd, {
                            children: [
                              (0, l.jsxs)(M.KF, {
                                children: [
                                  (0, l.jsx)(M.XE, { marginRight: 2 }),
                                  (0, l.jsx)(X.X, { size: 'sm', children: 'Behavior' }),
                                ],
                              }),
                              (0, l.jsx)(M.Hk, {
                                children: (0, l.jsxs)(W.gC, {
                                  spacing: 2,
                                  justifyContent: 'flex-start',
                                  divider: (0, l.jsx)(W.cX, { borderColor: 'gray.500' }),
                                  align: 'stretch',
                                  paddingLeft: 7,
                                  color: 'gray.800',
                                  children: [
                                    (0, l.jsxs)(_.k, {
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      children: [
                                        (0, l.jsxs)(_.k, {
                                          children: [
                                            (0, l.jsx)(U.x, { children: 'Expand Node' }),
                                            (0, l.jsx)(ie, {
                                              infoText:
                                                'View only the node and its direct neighbors',
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)(q.v2, {
                                          placement: 'right',
                                          children: [
                                            (0, l.jsx)(q.j2, {
                                              as: V.z,
                                              rightIcon: (0, l.jsx)(E.v, {}),
                                              colorScheme: '',
                                              color: 'black',
                                              children: (0, l.jsx)(U.x, {
                                                children: g.local
                                                  ? g.local[0].toUpperCase() + g.local.slice(1)
                                                  : 'Never',
                                              }),
                                            }),
                                            (0, l.jsxs)(G.h, {
                                              children: [
                                                ' ',
                                                (0, l.jsxs)(q.qy, {
                                                  zIndex: 'popover',
                                                  bgColor: 'gray.200',
                                                  children: [
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(te(te({}, g), {}, { local: '' }))
                                                      },
                                                      children: 'Never',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { local: 'click' }),
                                                        )
                                                      },
                                                      children: 'Click',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { local: 'double' }),
                                                        )
                                                      },
                                                      children: 'Double Click',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { local: 'right' }),
                                                        )
                                                      },
                                                      children: 'Right Click',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(_.k, {
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      children: [
                                        (0, l.jsx)(U.x, { children: 'Open in Emacs' }),
                                        (0, l.jsxs)(q.v2, {
                                          placement: 'right',
                                          children: [
                                            (0, l.jsx)(q.j2, {
                                              as: V.z,
                                              rightIcon: (0, l.jsx)(E.v, {}),
                                              colorScheme: '',
                                              color: 'black',
                                              children: (0, l.jsx)(U.x, {
                                                children: g.follow
                                                  ? g.follow[0].toUpperCase() + g.follow.slice(1)
                                                  : 'Never',
                                              }),
                                            }),
                                            (0, l.jsxs)(G.h, {
                                              children: [
                                                ' ',
                                                (0, l.jsxs)(q.qy, {
                                                  bgColor: 'gray.200',
                                                  zIndex: 'popover',
                                                  children: [
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(te(te({}, g), {}, { follow: '' }))
                                                      },
                                                      children: 'Never',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { follow: 'click' }),
                                                        )
                                                      },
                                                      children: 'Click',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { follow: 'double' }),
                                                        )
                                                      },
                                                      children: 'Double Click',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return x(
                                                          te(te({}, g), {}, { follow: 'right' }),
                                                        )
                                                      },
                                                      children: 'Right Click',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(_.k, {
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      children: [
                                        (0, l.jsx)(U.x, { children: 'Follow Emacs by...' }),
                                        (0, l.jsxs)(q.v2, {
                                          placement: 'right',
                                          children: [
                                            (0, l.jsx)(q.j2, {
                                              as: V.z,
                                              rightIcon: (0, l.jsx)(E.v, {}),
                                              colorScheme: '',
                                              color: 'black',
                                              children: (0, l.jsx)(U.x, {
                                                children:
                                                  f.follow[0].toUpperCase() + f.follow.slice(1),
                                              }),
                                            }),
                                            (0, l.jsxs)(G.h, {
                                              children: [
                                                ' ',
                                                (0, l.jsxs)(q.qy, {
                                                  bgColor: 'gray.200',
                                                  zIndex: 'popover',
                                                  children: [
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return p(
                                                          te(te({}, f), {}, { follow: 'local' }),
                                                        )
                                                      },
                                                      children: 'Opening the local graph',
                                                    }),
                                                    (0, l.jsx)(q.sN, {
                                                      onClick: function () {
                                                        return p(
                                                          te(te({}, f), {}, { follow: 'zoom' }),
                                                        )
                                                      },
                                                      children: 'Zooming to the current node',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)(oe, {
                                      label: 'Zoom speed',
                                      value: f.zoomSpeed,
                                      min: 0,
                                      max: 4e3,
                                      step: 100,
                                      onChange: function (e) {
                                        return p(te(te({}, f), {}, { zoomSpeed: e }))
                                      },
                                    }),
                                    (0, l.jsx)(oe, {
                                      label: 'Zoom padding',
                                      value: f.zoomPadding,
                                      min: 0,
                                      max: 400,
                                      step: 1,
                                      onChange: function (e) {
                                        return p(te(te({}, f), {}, { zoomPadding: e }))
                                      },
                                      infoText:
                                        'How much to zoom out to accomodate all nodes when changing the view.',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        ie = function (e) {
          var n = e.infoText
          return (0, l.jsx)(j.xu, {
            paddingLeft: '1',
            children: (0, l.jsx)(B.u, {
              label: n,
              placement: 'top',
              color: 'gray.100',
              bg: 'gray.800',
              hasArrow: !0,
              children: (0, l.jsx)(H.h, {}),
            }),
          })
        },
        oe = function (e) {
          var n = e.min,
            t = void 0 === n ? 0 : n,
            r = e.max,
            i = void 0 === r ? 10 : r,
            o = e.step,
            a = void 0 === o ? 0.1 : o,
            s = e.value,
            c = void 0 === s ? 1 : s,
            d = (0, L.Z)(e, ['min', 'max', 'step', 'value']),
            h = d.onChange,
            g = d.label,
            x = d.infoText,
            f = (0, u.useContext)(ee.N).highlightColor
          return (0, l.jsxs)(j.xu, {
            children: [
              (0, l.jsxs)(j.xu, {
                display: 'flex',
                alignItems: 'flex-end',
                children: [(0, l.jsx)(U.x, { children: g }), x && (0, l.jsx)(ie, { infoText: x })],
              }),
              (0, l.jsxs)(Y.iR, {
                value: c,
                onChange: h,
                min: t,
                max: i,
                step: a,
                children: [
                  (0, l.jsx)(Y.Uj, { children: (0, l.jsx)(Y.Ms, {}) }),
                  (0, l.jsx)(B.u, {
                    bg: f,
                    label: c.toFixed(1),
                    children: (0, l.jsx)(Y.gs, { bg: 'white' }),
                  }),
                ],
              }),
            ],
          })
        },
        le = function (e) {
          var n = e.value,
            t = e.onChange,
            r = e.label,
            i = e.infoText,
            o = e.children
          return (0, l.jsxs)(j.xu, {
            paddingTop: 2,
            children: [
              (0, l.jsxs)(j.xu, {
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: 2,
                children: [
                  (0, l.jsxs)(j.xu, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, l.jsx)(U.x, { children: r }),
                      i && (0, l.jsx)(ie, { infoText: i }),
                    ],
                  }),
                  (0, l.jsx)(Q.r, { isChecked: !!n, onChange: t }),
                ],
              }),
              (0, l.jsx)(K.U, {
                in: !!n,
                animateOpacity: !0,
                children: (0, l.jsx)(j.xu, {
                  paddingLeft: 4,
                  paddingTop: 2,
                  paddingBottom: 2,
                  children: o,
                }),
              }),
            ],
          })
        },
        ae = function (e) {
          var n = e.label,
            t = e.colorList,
            r = e.value,
            i = e.visuals,
            o = e.visValue,
            a = e.setVisuals
          return (0, l.jsxs)(_.k, {
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              (0, l.jsx)(U.x, { children: n }),
              (0, l.jsxs)(q.v2, {
                placement: 'right',
                children: [
                  (0, l.jsx)(q.j2, {
                    as: V.z,
                    colorScheme: '',
                    color: 'black',
                    rightIcon: (0, l.jsx)(E.v, {}),
                    children: (0, l.jsx)(j.xu, {
                      bgColor: o,
                      borderRadius: 'sm',
                      height: 6,
                      width: 6,
                    }),
                  }),
                  (0, l.jsxs)(G.h, {
                    children: [
                      ' ',
                      (0, l.jsxs)(q.qy, {
                        minW: 10,
                        zIndex: 'popover',
                        bgColor: 'gray.200',
                        children: [
                          (0, l.jsx)(q.sN, {
                            onClick: function () {
                              return a(te(te({}, i), {}, (0, s.Z)({}, r, '')))
                            },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            display: 'flex',
                            children: (0, l.jsx)(j.xu, { height: 6, width: 6 }),
                          }),
                          t.map(function (e) {
                            return (0, l.jsx)(
                              q.sN,
                              {
                                onClick: function () {
                                  return a(te(te({}, i), {}, (0, s.Z)({}, r, e)))
                                },
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                display: 'flex',
                                children: (0, l.jsx)(j.xu, {
                                  bgColor: e,
                                  borderRadius: 'sm',
                                  height: 6,
                                  width: 6,
                                }),
                              },
                              e,
                            )
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        se = t(1122),
        ce = t(2003)
      function ue(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function de(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? ue(Object(t), !0).forEach(function (n) {
                ;(0, s.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ue(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      var he = t.e(4).then(t.bind(t, 7004)),
        ge = t.g.window ? t(1957).f$ : null,
        xe = t.g.window ? t(1957).s6 : null
      function fe() {
        var e = (0, u.useState)(!1),
          n = e[0],
          t = e[1]
        return (
          (0, u.useEffect)(function () {
            t(!0)
          }, []),
          n ? (0, l.jsx)(pe, {}) : null
        )
      }
      function pe() {
        var e = d('physics', S),
          n = (0, c.Z)(e, 2),
          t = n[0],
          r = n[1],
          i = d('filter', O),
          o = (0, c.Z)(i, 2),
          h = o[0],
          g = o[1],
          x = d('visuals', N),
          f = (0, c.Z)(x, 2),
          p = f[0],
          m = f[1],
          v = (0, u.useState)(null),
          b = v[0],
          C = v[1],
          y = (0, u.useState)(null),
          k = y[0],
          w = y[1],
          L = d('behavior', I),
          D = (0, c.Z)(L, 2),
          R = D[0],
          T = D[1],
          P = d('mouse', z),
          Z = (0, c.Z)(P, 2),
          E = Z[0],
          H = Z[1],
          F = (0, u.useRef)({}),
          A = (0, u.useRef)({}),
          B = (0, u.useContext)(ee.N).setEmacsTheme,
          V = (0, u.useState)(!1),
          M = V[0],
          X = V[1],
          W = (0, u.useState)({ nodeIds: [] }),
          _ = W[0],
          U = W[1],
          Q = (0, u.useRef)({ nodeIds: [] }),
          q = (0, u.useRef)(I)
        q.current = R
        var G = (0, u.useRef)(null),
          K = (0, u.useRef)(null)
        Q.current = _
        var J = function (e, n) {
          var t,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
            o = G.current,
            l = Q.current,
            s = q.current,
            c = null !== (t = A.current[n]) && void 0 !== t ? t : [],
            u = Object.fromEntries(
              [n]
                .concat(
                  (0, a.Z)(
                    c.flatMap(function (e) {
                      return [e.source, e.target]
                    }),
                  ),
                )
                .map(function (e) {
                  return [e, {}]
                }),
            )
          return 'zoom' === e
            ? (console.log(l),
              l.nodeIds.length &&
                (console.log('emptying'), console.log('scope ' + l.nodeIds), U({ nodeIds: [] })),
              void setTimeout(function () {
                return o.zoomToFit(r, i, function (e) {
                  return u[e.id]
                })
              }, 50))
            : l.nodeIds.length
            ? 'add' !== s.localSame
              ? (U({ nodeIds: [n] }),
                void setTimeout(function () {
                  o.centerAt(0, 0, r)
                }, 50))
              : l.nodeIds.includes(n) &&
                l.nodeIds.some(function (e) {
                  return u[e]
                })
              ? (U(function (e) {
                  return de(de({}, e), {}, { nodeIds: [].concat((0, a.Z)(e.nodeIds), [n]) })
                }),
                void setTimeout(function () {
                  return o.zoomToFit(r, i, function (e) {
                    return u[e.id]
                  })
                }, 50))
              : (U({ nodeIds: [n] }),
                void setTimeout(function () {
                  o.centerAt(0, 0, r)
                }, 50))
            : (U({ nodeIds: [n] }),
              void setTimeout(function () {
                o.centerAt(0, 0, r)
              }, 50))
        }
        return (
          (0, u.useEffect)(function () {
            ;(K.current = new ce.Z('ws://localhost:35903')),
              K.current.addEventListener('open', function (e) {
                console.log('Connection with Emacs established')
              }),
              K.current.addEventListener('message', function (e) {
                G.current
                var n = q.current,
                  t = JSON.parse(e.data)
                switch (t.type) {
                  case 'graphdata':
                    return (function (e) {
                      var n = e.nodes.reduce(function (e, n) {
                          var t
                          return de(
                            de({}, e),
                            {},
                            (0, s.Z)(
                              {},
                              n.file,
                              [].concat(
                                (0, a.Z)(null !== (t = e[n.file]) && void 0 !== t ? t : []),
                                [n],
                              ),
                            ),
                          )
                        }, {}),
                        t = Object.keys(n).flatMap(function (e) {
                          var t,
                            r = null !== (t = n[e]) && void 0 !== t ? t : [],
                            i = r.find(function (e) {
                              return 0 === e.level
                            }),
                            o = r.filter(function (e) {
                              return 0 !== e.level
                            })
                          return i
                            ? o.map(function (e) {
                                return { source: e.id, target: i.id, type: 'parent' }
                              })
                            : []
                        })
                      F.current = Object.fromEntries(
                        e.nodes.map(function (e) {
                          return [e.id, e]
                        }),
                      )
                      var r = [].concat((0, a.Z)(e.links), (0, a.Z)(t)).filter(function (e) {
                        var n = e.source,
                          t = e.target
                        return F.current[n] && F.current[t]
                      })
                      A.current = r.reduce(function (e, n) {
                        var t, r, i
                        return de(
                          de({}, e),
                          {},
                          ((i = {}),
                          (0, s.Z)(
                            i,
                            n.source,
                            [].concat(
                              (0, a.Z)(null !== (t = e[n.source]) && void 0 !== t ? t : []),
                              [n],
                            ),
                          ),
                          (0, s.Z)(
                            i,
                            n.target,
                            [].concat(
                              (0, a.Z)(null !== (r = e[n.target]) && void 0 !== r ? r : []),
                              [n],
                            ),
                          ),
                          i),
                        )
                      }, {})
                      var i = de(de({}, e), {}, { links: r }),
                        o = JSON.parse(JSON.stringify(i))
                      C(o)
                    })(t.data)
                  case 'theme':
                    return B(t.data)
                  case 'command':
                    switch (t.data.commandName) {
                      case 'local':
                        var r = R.zoomSpeed,
                          i = R.zoomPadding
                        J('local', t.data.id, r, i), w(t.data.id)
                        break
                      case 'zoom':
                        var o,
                          l,
                          c =
                            (null === t || void 0 === t || null === (o = t.data) || void 0 === o
                              ? void 0
                              : o.speed) || n.zoomSpeed,
                          u =
                            (null === t || void 0 === t || null === (l = t.data) || void 0 === l
                              ? void 0
                              : l.padding) || n.zoomPadding
                        J('zoom', t.data.id, c, u), w(t.data.id)
                        break
                      case 'follow':
                        J(n.follow, t.data.id, n.zoomSpeed, n.zoomPadding), w(t.data.id)
                        break
                      default:
                        return console.error('unknown message type', t.type)
                    }
                }
              })
          }, []),
          b
            ? (0, l.jsxs)(j.xu, {
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
                height: '100%',
                children: [
                  (0, l.jsx)(
                    re,
                    de(
                      {},
                      {
                        physics: t,
                        setPhysics: r,
                        threeDim: M,
                        setThreeDim: X,
                        filter: h,
                        setFilter: g,
                        visuals: p,
                        setVisuals: m,
                        mouse: E,
                        setMouse: H,
                        behavior: R,
                        setBehavior: T,
                      },
                    ),
                  ),
                  (0, l.jsx)(j.xu, {
                    position: 'absolute',
                    alignItems: 'top',
                    children: (0, l.jsx)(
                      je,
                      de(
                        {
                          ref: G,
                          nodeById: F.current,
                          linksByNodeId: A.current,
                          webSocket: K.current,
                        },
                        {
                          physics: t,
                          graphData: b,
                          threeDim: M,
                          emacsNodeId: k,
                          filter: h,
                          visuals: p,
                          behavior: R,
                          mouse: E,
                          scope: _,
                          setScope: U,
                        },
                      ),
                    ),
                  }),
                ],
              })
            : null
        )
      }
      var je = (0, u.forwardRef)(function (e, n) {
        var t = e.physics,
          r = e.graphData,
          s = e.threeDim,
          d = e.linksByNodeId,
          h = e.filter,
          j = e.emacsNodeId,
          m = e.nodeById,
          v = e.visuals,
          b = (e.behavior, e.mouse),
          C = e.scope,
          y = e.setScope,
          k = e.webSocket,
          S = (0, x.iP)(),
          O = (0, c.Z)(S, 2),
          N = O[0],
          I = O[1],
          z = (0, u.useState)(null),
          L = z[0],
          D = z[1],
          R = (0, p.useTheme)(),
          T = (0, u.useContext)(ee.N).emacsTheme,
          P = function (e, n) {
            switch (e) {
              case b.local:
                if (C.nodeIds.includes(n.id)) break
                y(function (e) {
                  return de(de({}, e), {}, { nodeIds: [].concat((0, a.Z)(e.nodeIds), [n.id]) })
                })
                break
              case b.follow:
                k.send(n.id)
            }
          },
          Z = (0, u.useRef)(null)
        ;(0, u.useEffect)(
          function () {
            j && D(m[j])
          },
          [j],
        ),
          (Z.current = L)
        var E = (0, u.useMemo)(
            function () {
              if (!Z.current) return {}
              var e = d[Z.current.id]
              return e
                ? Object.fromEntries(
                    [Z.current.id]
                      .concat(
                        (0, a.Z)(
                          e.flatMap(function (e) {
                            return [e.source, e.target]
                          }),
                        ),
                      )
                      .map(function (e) {
                        return [e, {}]
                      }),
                  )
                : {}
            },
            [Z.current, d],
          ),
          H = (0, u.useMemo)(
            function () {
              var e = r.nodes.filter(function (e) {
                  var n,
                    t = null !== (n = d[e.id]) && void 0 !== n ? n : []
                  return (
                    !h.orphans ||
                    (h.parents
                      ? 0 !== t.length
                      : 0 !== t.length &&
                        t.some(function (e) {
                          return !['parent', 'ref'].includes(e.type)
                        }))
                  )
                }),
                n =
                  (e.map(function (e) {
                    return e.id
                  }),
                  r.links.filter(function (e) {
                    var n = e
                    return h.parents || 'parent' !== n.type
                  })),
                t = e.filter(function (e) {
                  var n,
                    t = null !== (n = d[e.id]) && void 0 !== n ? n : []
                  return (
                    C.nodeIds.includes(e.id) ||
                    t.some(function (e) {
                      return C.nodeIds.includes(e.source) || C.nodeIds.includes(e.target)
                    })
                  )
                }),
                i = t.map(function (e) {
                  return e.id
                }),
                o = n.filter(function (e) {
                  var n = 'object' === typeof e.source ? e.source.id : e.source,
                    t = 'object' === typeof e.target ? e.target.id : e.target
                  return i.includes(n) && i.includes(t)
                })
              return 0 === C.nodeIds.length ? { nodes: e, links: n } : { nodes: t, links: o }
            },
            [h, C, r],
          )
        ;(0, u.useEffect)(function () {
          ;(0, o.Z)(
            i().mark(function e() {
              var r, o
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.current), (e.next = 3), he
                    case 3:
                      ;(o = e.sent),
                        t.gravityOn
                          ? (r.d3Force('x', o.forceX().strength(t.gravity)),
                            r.d3Force('y', o.forceY().strength(t.gravity)),
                            s && r.d3Force('z', o.forceZ().strength(t.gravity)))
                          : (r.d3Force('x', null), r.d3Force('y', null), s && r.d3Force('z', null)),
                        t.centering
                          ? r.d3Force('center', o.forceCenter().strength(t.centeringStrength))
                          : r.d3Force('center', null),
                        t.linkStrength && r.d3Force('link').strength(t.linkStrength),
                        t.linkIts && r.d3Force('link').iterations(t.linkIts),
                        t.charge && r.d3Force('charge').strength(t.charge),
                        r.d3Force(
                          'collide',
                          t.collision ? o.forceCollide().radius(t.collisionStrength) : null,
                        )
                    case 10:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )()
        }),
          (0, u.useEffect)(
            function () {
              var e
              null === (e = n.current) || void 0 === e || e.d3ReheatSimulation()
            },
            [t],
          )
        var F = (0, u.useRef)(0),
          A = (0, u.useState)(1),
          B = A[0],
          V = A[1],
          M = (0, f._7)(
            function (e) {
              return V(e)
            },
            { duration: v.animationSpeed, algorithm: w[v.algorithmName] },
          ),
          X = (0, c.Z)(M, 2),
          W = X[0],
          _ = X[1],
          U = (0, f._7)(
            function (e) {
              return V(Math.min(B, -1 * (e - 1)))
            },
            { duration: v.animationSpeed, algorithm: w[v.algorithmName] },
          ),
          Q = (0, c.Z)(U, 2),
          q = Q[0],
          G = Q[1],
          K = (0, u.useRef)(null)
        ;(0, u.useEffect)(
          function () {
            if ((L && (K.current = L), !v.highlightAnim)) return V(L ? 1 : 0)
            L ? W() : (_(), B > 0.5 ? q() : V(0))
          },
          [L],
        )
        var J = function (e) {
            if (R)
              return e.split('.').reduce(function (e, n) {
                return e[n]
              }, R.colors)
          },
          Y = (0, u.useMemo)(
            function () {
              var e = v.nodeColorScheme.concat(
                v.linkColorScheme || [],
                v.linkHighlight || [],
                v.nodeHighlight || [],
                v.citeNodeColor || [],
                v.citeLinkColor || [],
              )
              return Object.fromEntries(
                e.map(function (n) {
                  var t = J(n),
                    r = e.map(function (e) {
                      return [e, g.Z(t, J(e))]
                    })
                  return [n, Object.fromEntries(r)]
                }),
              )
            },
            [v.nodeColorScheme, v.linkHighlight, v.nodeHighlight, v.linkColorScheme, T],
          ),
          $ = (0, u.useMemo)(
            function () {
              var e,
                n,
                t,
                r =
                  null !== (e = d[null === (n = K.current) || void 0 === n ? void 0 : n.id]) &&
                  void 0 !== e
                    ? e
                    : []
              return Object.fromEntries(
                [null === (t = K.current) || void 0 === t ? void 0 : t.id]
                  .concat(
                    (0, a.Z)(
                      r.flatMap(function (e) {
                        return [e.source, e.target]
                      }),
                    ),
                  )
                  .map(function (e) {
                    return [e, {}]
                  }),
              )
            },
            [JSON.stringify(L), K.current],
          ),
          ne = function (e) {
            var n,
              t,
              r,
              i,
              o,
              l,
              a =
                null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.length) &&
                void 0 !== n
                  ? n
                  : 0,
              s = a
                ? null === (r = d[e]) || void 0 === r
                  ? void 0
                  : r.filter(function (e) {
                      return 'parent' === e.type || 'cite' === e.type
                    }).length
                : 0,
              c = h.parents ? a : a - s
            return v.nodeColorScheme[
              ((i = c), (o = 0), (l = v.nodeColorScheme.length - 1), Math.min(Math.max(i, o), l))
            ]
          },
          te = function (e, n) {
            return d[e] > d[n] ? ne(e) : ne(n)
          },
          re = function (e, n) {
            return (
              'rgba(' +
              (e = e.replace('#', ''))
                .match(new RegExp('(.{' + e.length / 3 + '})', 'g'))
                .map(function (n) {
                  return parseInt(e.length % 2 ? n + n : n, 16)
                })
                .concat(isFinite(n) ? n : 1)
                .join(',') +
              ')'
            )
          },
          ie = (0, u.useMemo)(
            function () {
              return J(v.labelTextColor)
            },
            [v.labelTextColor, T],
          ),
          oe = (0, u.useMemo)(
            function () {
              return J(v.labelBackgroundColor)
            },
            [v.labelBackgroundColor, T],
          ),
          le = {
            graphData: H,
            width: N,
            height: I,
            backgroundColor: R.colors.gray[v.backgroundColor],
            nodeLabel: function (e) {
              return e.title
            },
            nodeColor: function (e) {
              return (function (e) {
                var n = E[e.id] || $[e.id]
                return v.emacsNodeColor && e.id === j
                  ? J(v.emacsNodeColor)
                  : v.citeNodeColor && e.properties.ROAM_REFS
                  ? J(v.citeNodeColor)
                  : n && v.nodeHighlight
                  ? Y[ne(e.id)][v.nodeHighlight](B)
                  : J(ne(e.id))
              })(e)
            },
            nodeRelSize: v.nodeRel,
            nodeVal: function (e) {
              var n,
                t = null !== (n = d[e.id]) && void 0 !== n ? n : [],
                r = t.length
                  ? t.filter(function (e) {
                      return 'parent' === e.type || 'cite' === e.type
                    }).length
                  : 0
              return (
                (3 + t.length - (h.parents ? 0 : r)) *
                (E[e.id] || $[e.id] ? 1 + B * (v.highlightNodeSize - 1) : 1)
              )
            },
            nodeCanvasObject: function (e, n, t) {
              if (e && v.labels) {
                var r = $[e.id]
                if (!(t <= v.labelScale || 1 === v.labels) || E[e.id] || r) {
                  var i = e.title,
                    o = i.substring(0, Math.min(i.length, 40)),
                    l = 12 / t,
                    s = [1.1 * n.measureText(o).width, l].map(function (e) {
                      return e + 0.5 * l
                    }),
                    c = Math.min((3 * (t - v.labelScale)) / v.labelScale, 1),
                    u = function () {
                      return 1 === v.labels || t <= v.labelScale
                        ? B
                        : E[e.id] || $[e.id]
                        ? Math.max(c, B)
                        : 1 * c * (-1 * (0.5 * B - 1))
                    }
                  if (v.labelBackgroundColor && v.labelBackgroundOpacity) {
                    var d = u() * v.labelBackgroundOpacity,
                      h = re(oe, d)
                    ;(n.fillStyle = h),
                      n.fillRect.apply(n, [e.x - s[0] / 2, e.y - s[1] / 2].concat((0, a.Z)(s)))
                  }
                  var g = u()
                  ;(n.textAlign = 'center'), (n.textBaseline = 'middle')
                  var x = re(ie, g)
                  ;(n.fillStyle = x),
                    (n.font = ''.concat(l, 'px Sans-Serif')),
                    n.fillText(o, e.x, e.y)
                }
              }
            },
            nodeCanvasObjectMode: function () {
              return 'after'
            },
            linkDirectionalParticles: v.particles ? v.particlesNumber : void 0,
            linkDirectionalArrowLength: v.arrows ? v.arrowsLength : void 0,
            linkDirectionalArrowRelPos: v.arrowsPos,
            linkDirectionalArrowColor: v.arrowsColor
              ? function (e) {
                  return J(v.arrowsColor)
                }
              : void 0,
            linkColor: function (e) {
              var n = 'object' === typeof e.source ? e.source.id : e.source,
                t = 'object' === typeof e.target ? e.target.id : e.target,
                r = me(e, Z.current),
                i = me(e, K.current),
                o = r || i,
                l = e
              return v.citeLinkColor && 'cite' === l.type
                ? J(v.citeLinkColor)
                : (function (e, n, t) {
                    if (!v.linkHighlight && !v.linkColorScheme && !t) {
                      var r = te(e, n)
                      return J(r)
                    }
                    if (!t && !v.linkColorScheme) {
                      var i = te(e, n)
                      return J(i)
                    }
                    if (!t) return J(v.linkColorScheme)
                    if (!v.linkHighlight && !v.linkColorScheme) {
                      var o = te(e, n)
                      return J(o)
                    }
                    return v.linkHighlight
                      ? v.linkColorScheme
                        ? Y[v.linkColorScheme][v.linkHighlight](B)
                        : Y[te(e, n)][v.linkHighlight](B)
                      : J(v.linkColorScheme)
                  })(n, t, o)
            },
            linkWidth: function (e) {
              var n = me(e, Z.current),
                t = me(e, K.current)
              return n || t ? v.linkWidth * (1 + B * (v.highlightLinkSize - 1)) : v.linkWidth
            },
            linkDirectionalParticleWidth: v.particlesWidth,
            d3AlphaDecay: t.alphaDecay,
            d3AlphaMin: t.alphaMin,
            d3VelocityDecay: t.velocityDecay,
            onNodeClick: function (e, n) {
              var t = n.timeStamp - F.current < 400
              return (F.current = n.timeStamp), P(t ? 'double' : 'click', e)
            },
            onBackgroundClick: function () {
              D(null),
                0 !== C.nodeIds.length &&
                  y(function (e) {
                    return de(de({}, e), {}, { nodeIds: [] })
                  })
            },
            onNodeHover: function (e) {
              v.highlight && (L || (G(), V(0)), D(e))
            },
            onNodeRightClick: function (e) {
              P('right', e)
            },
          }
        return (0, l.jsx)('div', {
          children: s
            ? (0, l.jsx)(
                xe,
                de(
                  de({ ref: n }, le),
                  {},
                  {
                    nodeThreeObjectExtend: !0,
                    backgroundColor: R.colors.white,
                    nodeOpacity: v.nodeOpacity,
                    nodeResolution: v.nodeResolution,
                    linkOpacity: v.linkOpacity,
                    nodeThreeObject: function (e) {
                      if (v.labels && (!(v.labels < 3) || E[e.id])) {
                        var n = new se.Z(e.title.substring(0, 40))
                        return (
                          (n.color = J(v.labelTextColor)),
                          (n.backgroundColor = J(v.labelBackgroundColor)),
                          (n.padding = 2),
                          (n.textHeight = 8),
                          n
                        )
                      }
                    },
                  },
                ),
              )
            : (0, l.jsx)(
                ge,
                de(
                  de({ ref: n }, le),
                  {},
                  {
                    linkLineDash: function (e) {
                      var n = e
                      return v.citeDashes && 'cite' === n.type
                        ? [v.citeDashLength, v.citeGapLength]
                        : null
                    },
                  },
                ),
              ),
        })
      })
      function me(e, n) {
        return (
          e.source.id === (null === n || void 0 === n ? void 0 : n.id) ||
          e.target.id === (null === n || void 0 === n ? void 0 : n.id)
        )
      }
    },
    5301: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(374)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 737, 446, 906, 888, 179], function () {
      return (n = 5301), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])