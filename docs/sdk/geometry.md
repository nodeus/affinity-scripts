# Геометрия, кривые, фигуры (SDK 33000)

> API-референс · Модуль `affinity:geometry`. Источник: онлайн-SDK build 33000.
> Сигнатуры `self` опущены (в JS методы вызываются на объекте).
> Варианты `*Async` дублируют синхронные (скрипты выполняются синхронно).


API (50), методов: 636.

## CubicBezierApi

> Модуль `affinity:geometry` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/CubicBezierApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `assign(other)` | other: CubicBezier | — |
| `evaluate(t)` | t: Number | Point |
| `getBoundingBox()` | — | Rectangle |
| `getClosestPoint(pt)` | pt: Point | Point |
| `getControlBox()` | — | Rectangle |
| `getCurvature(t)` | t: Number | Number |
| `getLength()` | — | Number |
| `getNormal(t, normalise)` | t: Number, normalise: Boolean | Vector |
| `getParamAtLength(length)` | length: Number | Number |
| `getTangent(t, normalise)` | t: Number, normalise: Boolean | Vector |
| `makeLine(start, end)` | start: Point, end: Point | — |
| `reverse()` | — | — |
| `split(t)` | t: Number | CubicBezierPair |
| `splitLeft(t)` | t: Number | CubicBezier |
| `splitRight(t)` | t: Number | CubicBezier |
| `transform(transform)` | transform: Transform | — |

## CurveApi

> Модуль `affinity:geometry` · методов: 46 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurveApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `appendNode(curveNode, cornerDataOrNull)` | curveNode: CurveNode, cornerDataOrNull: CurveCornerData | — |
| `clear()` | — | — |
| `clone()` | — | CurveHandle |
| `create()` | — | CurveHandle |
| `createDiamond(rectangle)` | rectangle: Rectangle | CurveHandle |
| `createEllipse(rectangle)` | rectangle: Rectangle | CurveHandle |
| `createLine(point1, point2)` | point1: Point, point2: Point | CurveHandle |
| `createLozenge(point0, point1, radius)` | point0: Point, point1: Point, radius: Number | CurveHandle |
| `createPrecisionEllipse(rectangle)` | rectangle: Rectangle | CurveHandle |
| `createPrecisionUnitCircle()` | — | CurveHandle |
| `createRectangle(rectangle)` | rectangle: Rectangle | CurveHandle |
| `cut(isParametric, distance)` | isParametric: Boolean, distance: Number | CurvePair |
| `enumerateNodes(callback)` | callback: Function | — |
| `generatePolygon(tolerance)` | tolerance: Number | PolygonHandle |
| `getApproxBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getCorner(pointIndex)` | pointIndex: Number | CurveCornerData |
| `getCubicBezier(pointIndex)` | pointIndex: Number | CubicBezier |
| `getExactBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getFirstOnCurvePointIndex()` | — | Number |
| `getLastOnCurvePointIndex()` | — | Number |
| `getLength()` | — | Number |
| `getNextOnCurvePointIndex(pointIndex, allowWrapIfClosed)` | pointIndex: Number, allowWrapIfClosed: Boolean | Number |
| `getNode(index)` | index: Number | CurveNode |
| `getNodeCount()` | — | Number |
| `getPath()` | — | Point[] |
| `getPoint(index)` | index: Number | Point |
| `getPointCount()` | — | Number |
| `getPreviousOnCurvePointIndex(pointIndex, allowWrapIfClosed)` | pointIndex: Number, allowWrapIfClosed: Boolean | Number |
| `getSubPath(start, count)` | start: Number, count: Number | Point[] |
| `isClockwise()` | — | Boolean |
| `isClosed()` | — | Boolean |
| `isEllipse()` | — | Boolean |
| `isEllipseTolerance(tolerance)` | tolerance: Number | Boolean |
| `isEmpty()` | — | Boolean |
| `isPolyline()` | — | Boolean |
| `isPolylineTolerance(tolerance)` | tolerance: Number | Boolean |
| `isRectangle()` | — | Boolean |
| `isRectangleTolerance(tolerance)` | tolerance: Number | Boolean |
| `isStraightLine()` | — | Boolean |
| `isStraightLineTolerance(tolerance)` | tolerance: Number | Boolean |
| `makeClosed()` | — | — |
| `reverse()` | — | — |
| `setCorner(pointIndex, curveCornerData, forceCorner)` | pointIndex: Number, curveCornerData: CurveCornerData, forceCorner: Boolean | — |
| `setPath(points)` | points: Point[] | — |
| `setPoint(index, point)` | index: Number, point: Point | — |
| `transform(transform)` | transform: Transform | — |

## CurveBuilderApi

> Модуль `affinity:geometry` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/CurveBuilderApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addArc(startAngle, endAngle, radius, reverse)` | startAngle: Number, endAngle: Number, radius: Number, reverse: Boolean | — |
| `addBezier(c0, c1, end)` | c0: Point, c1: Point, end: Point | — |
| `addEllipse(startAngle, endAngle, majorRadius, minorRadius, rotation, reverse)` | startAngle: Number, endAngle: Number, majorRadius: Number, minorRadius: Number, rotation: Number, reverse: Boolean | — |
| `begin(point)` | point: Point | — |
| `bulgeRelative(vector, bulge)` | vector: Vector, bulge: Number | — |
| `bulgeTo(point, bulge)` | point: Point, bulge: Number | — |
| `clone()` | — | CurveBuilderHandle |
| `close()` | — | — |
| `create()` | — | CurveBuilderHandle |
| `createCurve()` | — | CurveHandle |
| `lineRelative(vector)` | vector: Vector | — |
| `lineTo(point)` | point: Point | — |
| `setCorner(pointIndex, curveCornerData, forceCorner)` | pointIndex: Number, curveCornerData: CurveCornerData, forceCorner: Boolean | — |
| `transform(transform)` | transform: Transform | — |
| `versineRelative(vector, versine)` | vector: Vector, versine: Number | — |
| `versineTo(point, versine)` | point: Point, versine: Number | — |

## MeshApi

> Модуль `affinity:geometry` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/MeshApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | MeshHandle |
| `cloneAsMesh()` | — | MeshHandle |
| `deleteSpline(isVertical, index)` | isVertical: Boolean, index: Number | — |
| `getCurveNodePosition(xIndex, yIndex, direction)` | xIndex: Number, yIndex: Number, direction: MeshDirection | Point |
| `getNodePosition(xIndex, yIndex)` | xIndex: Number, yIndex: Number | Point |
| `getNodeStyle(xIndex, yIndex)` | xIndex: Number, yIndex: Number | CurveNodeStyle |
| `getSize()` | — | MeshSize |
| `insertSpline(isVertical, index, param)` | isVertical: Boolean, index: Number, param: Number | — |
| `setCurveNodePosition(xIndex, yIndex, direction, position)` | xIndex: Number, yIndex: Number, direction: MeshDirection, position: Point | — |
| `setNodePosition(xIndex, yIndex, position)` | xIndex: Number, yIndex: Number, position: Point | — |
| `setNodeStyle(xIndex, yIndex, style)` | xIndex: Number, yIndex: Number, style: CurveNodeStyle | — |

## PointApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/PointApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `absEq()` | — | — |
| `assign(other)` | other: Point | — |
| `distance(point, other)` | point: Point, other: Point | Number |
| `distanceSquared(point, other)` | point: Point, other: Point | Number |
| `getAbs(point)` | point: Point | Point |
| `getNeg(point)` | point: Point | Point |
| `interpolate(point, other, t)` | point: Point, other: Point, t: Number | Point |
| `makeZero()` | — | — |
| `negEq()` | — | — |
| `scale(point, s)` | point: Point, s: Number | Point |
| `transform(point, transform)` | point: Point, transform: Transform | Point |
| `translate(point, translation)` | point: Point, translation: Vector | Point |
| `vectorTo(startPoint, endPoint)` | startPoint: Point, endPoint: Point | Vector |

## PolyCurveApi

> Модуль `affinity:geometry` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyCurveApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addCurve(curve, moveContents)` | curve: CurveHandle, moveContents: Boolean | — |
| `clear()` | — | — |
| `clone()` | — | PolyCurveHandle |
| `create()` | — | PolyCurveHandle |
| `getApproxBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getControlBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getCurve(index, clone)` | index: Number, clone: Boolean | CurveHandle |
| `getCurveCount()` | — | Number |
| `getExactBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `removeEmptyCurves()` | — | — |
| `transform(transform)` | transform: Transform | — |

## PolyPolyCurveApi

> Модуль `affinity:geometry` · методов: 18 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolyPolyCurveApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addPolyCurve(polyCurve, transformOrNull)` | polyCurve: PolyCurveHandle, transformOrNull: Transform | — |
| `addPolyPolyCurve(polyPolyCurve, transformOrNull)` | polyPolyCurve: PolyPolyCurveHandle, transformOrNull: Transform | — |
| `addRectangle(rectangle, transformOrNull)` | rectangle: Rectangle, transformOrNull: Transform | — |
| `clone()` | — | PolyPolyCurveHandle |
| `containsPoint(point, allowUnclosed, windingOrder, performBoundsCheck)` | point: Point, allowUnclosed: Boolean, windingOrder: WindingOrder, performBoundsCheck: Boolean | Boolean |
| `getApproxBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getExactBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getPolyCurve(index)` | index: Number | PolyCurveHandle |
| `getPolyCurveCount()` | — | Number |
| `getPolyCurveTransform(index)` | index: Number | Transform |
| `getTransformedPolyCurve(index)` | index: Number | PolyCurveHandle |
| `hasCorners()` | — | Boolean |
| `hasCurves()` | — | Boolean |
| `hasJoins()` | — | Boolean |
| `intersectsRectangle(transform, rectangle, closeCurves)` | transform: Transform, rectangle: Rectangle, closeCurves: Boolean | Boolean |
| `isNearPoint(point, xTolerance, yTolerance, tolerance)` | point: Point, xTolerance: Number, yTolerance: Number, tolerance: Number | Boolean |
| `isNearRectangle(rectangle, tolerance)` | rectangle: Rectangle, tolerance: Number | Boolean |
| `transform(transformOrNull)` | transformOrNull: Transform | — |

## PolygonApi

> Модуль `affinity:geometry` · методов: 18 · [SDK](https://sdk.affinity.studio/33000/js/apis/PolygonApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `addPoint(point)` | point: Point | PolygonHandle |
| `clear()` | — | PolygonHandle |
| `clone()` | — | PolygonHandle |
| `close()` | — | PolygonHandle |
| `create()` | — | PolygonHandle |
| `createLine(point1, point2)` | point1: Point, point2: Point | PolygonHandle |
| `createRectangle(rectangle)` | rectangle: Rectangle | PolygonHandle |
| `createTriangle(point1, point2, point3)` | point1: Point, point2: Point, point3: Point | PolygonHandle |
| `enumeratePoints(callback)` | callback: Function | — |
| `getBoundingBox(transformOrNull)` | transformOrNull: Transform | BoundingBox |
| `getPoint(index)` | index: Number | Point |
| `getPointCount()` | — | Number |
| `insertPoint(point, index)` | point: Point, index: Number | PolygonHandle |
| `isClockwise()` | — | Boolean |
| `isClosed()` | — | Boolean |
| `isEmpty()` | — | Boolean |
| `isRectangle()` | — | Boolean |
| `reverse()` | — | PolygonHandle |

## QRPayloadApi

> Модуль `affinity:geometry` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clearPayload()` | — | — |
| `clone()` | — | QRPayloadHandle |
| `cloneAsQRPayload()` | — | QRPayloadHandle |
| `create(type)` | type: QRPayloadType | QRPayloadHandle |
| `getPayloadDisplayString()` | — | String |
| `getPayloadString()` | — | String |
| `getPayloadType()` | — | QRPayloadType |
| `isPayloadValid()` | — | Boolean |
| `parse(text)` | text: String | QRPayloadHandle |

## QRPayloadDataMergeApi

> Модуль `affinity:geometry` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadDataMergeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadDataMergeHandle |
| `cloneAsQRPayloadDataMerge()` | — | QRPayloadDataMergeHandle |
| `create()` | — | QRPayloadDataMergeHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadDataMergeHandle |
| `getDataMergeField()` | — | String |
| `hasPreviewValue()` | — | Boolean |
| `setDataMergeField(text)` | text: String | — |
| `setPreviewValue(text)` | text: String | — |

## QRPayloadEmailApi

> Модуль `affinity:geometry` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadEmailApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadEmailHandle |
| `cloneAsQRPayloadEmail()` | — | QRPayloadEmailHandle |
| `create()` | — | QRPayloadEmailHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadEmailHandle |
| `getAddress()` | — | String |
| `getBody()` | — | String |
| `getSubject()` | — | String |
| `isAddressValid()` | — | Boolean |
| `setAddress(text)` | text: String | — |
| `setBody(text)` | text: String | — |
| `setSubject(text)` | text: String | — |

## QRPayloadFaceTimeApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadFaceTimeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadFaceTimeHandle |
| `cloneAsQRPayloadFaceTime()` | — | QRPayloadFaceTimeHandle |
| `create()` | — | QRPayloadFaceTimeHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadFaceTimeHandle |
| `getRecipient()` | — | String |
| `setRecipient(text)` | text: String | — |

## QRPayloadLocationApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadLocationApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadLocationHandle |
| `cloneAsQRPayloadLocation()` | — | QRPayloadLocationHandle |
| `create()` | — | QRPayloadLocationHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadLocationHandle |
| `getElevation()` | — | String |
| `getLatitude()` | — | String |
| `getLongitude()` | — | String |
| `isElevationValid()` | — | Boolean |
| `isLatitudeValid()` | — | Boolean |
| `isLongitudeValid()` | — | Boolean |
| `setElevation(text)` | text: String | — |
| `setLatitude(text)` | text: String | — |
| `setLongitude(text)` | text: String | — |

## QRPayloadPhoneApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadPhoneApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadPhoneHandle |
| `cloneAsQRPayloadPhone()` | — | QRPayloadPhoneHandle |
| `create()` | — | QRPayloadPhoneHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadPhoneHandle |
| `getNumber()` | — | String |
| `setNumber(text)` | text: String | — |

## QRPayloadSMSApi

> Модуль `affinity:geometry` · методов: 9 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadSMSApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadSMSHandle |
| `cloneAsQRPayloadSMS()` | — | QRPayloadSMSHandle |
| `create()` | — | QRPayloadSMSHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadSMSHandle |
| `getContent()` | — | String |
| `getNumber()` | — | String |
| `isNumberValid()` | — | Boolean |
| `setContent(content)` | content: String | — |
| `setNumber(number)` | number: String | — |

## QRPayloadTextApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadTextApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadTextHandle |
| `cloneAsQRPayloadText()` | — | QRPayloadTextHandle |
| `create()` | — | QRPayloadTextHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadTextHandle |
| `getText()` | — | String |
| `setText(text)` | text: String | — |

## QRPayloadURLApi

> Модуль `affinity:geometry` · методов: 7 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadURLApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadURLHandle |
| `cloneAsQRPayloadURL()` | — | QRPayloadURLHandle |
| `create()` | — | QRPayloadURLHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadURLHandle |
| `getURL()` | — | String |
| `isURLValid()` | — | Boolean |
| `setURL(text)` | text: String | — |

## QRPayloadVCardApi

> Модуль `affinity:geometry` · методов: 41 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadVCardApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadVCardHandle |
| `cloneAsQRPayloadVCard()` | — | QRPayloadVCardHandle |
| `create()` | — | QRPayloadVCardHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadVCardHandle |
| `getBirthday()` | — | String |
| `getCity()` | — | String |
| `getCompany()` | — | String |
| `getCountry()` | — | String |
| `getEmail()` | — | String |
| `getFirstName()` | — | String |
| `getJobTitle()` | — | String |
| `getLastName()` | — | String |
| `getNotes()` | — | String |
| `getPhone()` | — | String |
| `getPostalCode()` | — | String |
| `getPrefixes()` | — | String |
| `getRegion()` | — | String |
| `getStreetAddress()` | — | String |
| `getSuffixes()` | — | String |
| `getWebsite()` | — | String |
| `isEmailValid()` | — | Boolean |
| `isFirstNameValid()` | — | Boolean |
| `isFullNameValid()` | — | Boolean |
| `isLastNameValid()` | — | Boolean |
| `isWebsiteValid()` | — | Boolean |
| `setBirthday(birthday)` | birthday: String | — |
| `setCity(city)` | city: String | — |
| `setCompany(company)` | company: String | — |
| `setCountry(country)` | country: String | — |
| `setEmail(email)` | email: String | — |
| `setFirstName(firstName)` | firstName: String | — |
| `setJobTitle(jobTitle)` | jobTitle: String | — |
| `setLastName(lastName)` | lastName: String | — |
| `setNotes(notes)` | notes: String | — |
| `setPhone(phone)` | phone: String | — |
| `setPostalCode(postalCode)` | postalCode: String | — |
| `setPrefixes(prefixes)` | prefixes: String | — |
| `setRegion(region)` | region: String | — |
| `setStreetAddress(streetAddress)` | streetAddress: String | — |
| `setSuffixes(suffixes)` | suffixes: String | — |
| `setWebsite(website)` | website: String | — |

## QRPayloadWhatsAppApi

> Модуль `affinity:geometry` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadWhatsAppApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadWhatsAppHandle |
| `cloneAsQRPayloadWhatsApp()` | — | QRPayloadWhatsAppHandle |
| `create()` | — | QRPayloadWhatsAppHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadWhatsAppHandle |
| `getContent()` | — | String |
| `getNumber()` | — | String |
| `setContent(content)` | content: String | — |
| `setNumber(number)` | number: String | — |

## QRPayloadWifiApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/QRPayloadWifiApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | QRPayloadWifiHandle |
| `cloneAsQRPayloadWifi()` | — | QRPayloadWifiHandle |
| `create()` | — | QRPayloadWifiHandle |
| `fromPayload(payload)` | payload: QRPayloadHandle | QRPayloadWifiHandle |
| `getEncryption()` | — | WifiEncryptionType |
| `getHidden()` | — | Boolean |
| `getPassword()` | — | String |
| `getSSID()` | — | String |
| `isSSIDValid()` | — | Boolean |
| `setEncryption(encryption)` | encryption: WifiEncryptionType | — |
| `setHidden(hidden)` | hidden: Boolean | — |
| `setPassword(password)` | password: String | — |
| `setSSID(ssid)` | ssid: String | — |

## RectangleApi

> Модуль `affinity:geometry` · методов: 22 · [SDK](https://sdk.affinity.studio/33000/js/apis/RectangleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `assign(dest, src)` | dest: Rectangle, src: Rectangle | — |
| `assignMinMax(dest, minPt, maxPt)` | dest: Rectangle, minPt: Point, maxPt: Point | — |
| `centreOn(rect, pt)` | rect: Rectangle, pt: Point | — |
| `getArea(rect)` | rect: Rectangle | Number |
| `getBottomCentre(rect)` | rect: Rectangle | Point |
| `getBottomLeft(rect)` | rect: Rectangle | Point |
| `getBottomRight(rect)` | rect: Rectangle | Point |
| `getCentre(rect)` | rect: Rectangle | Point |
| `getCentreLeft(rect)` | rect: Rectangle | Point |
| `getCentreRight(rect)` | rect: Rectangle | Point |
| `getMaxPoint(rect)` | rect: Rectangle | Point |
| `getMinMaxPoints(rect)` | rect: Rectangle | PointMinMax |
| `getMinPoint(rect)` | rect: Rectangle | Point |
| `getTopCentre(rect)` | rect: Rectangle | Point |
| `getTopLeft(rect)` | rect: Rectangle | Point |
| `getTopRight(rect)` | rect: Rectangle | Point |
| `isFinite(rect)` | rect: Rectangle | Boolean |
| `isValid(rect)` | rect: Rectangle | Boolean |
| `makeNormalised(rect)` | rect: Rectangle | — |
| `makeZero(rect)` | rect: Rectangle | — |
| `moveTo(rect, pt)` | rect: Rectangle, pt: Point | — |
| `offset(rect, vector)` | rect: Rectangle, vector: Vector | — |

## ShapeApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeHandle |
| `cloneAsShape()` | — | ShapeHandle |
| `create(type)` | type: ShapeType | ShapeHandle |
| `getCurves(rectangle, transform)` | rectangle: Rectangle, transform: Transform | PolyCurveHandle |
| `getDefaultMinorAxisSize()` | — | Number |
| `getDisplayName()` | — | String |
| `getMajorAxis()` | — | ShapeMajorAxis |
| `getRotationOrder()` | — | Number |
| `getShapeType()` | — | ShapeType |
| `getTransformedBounds(rectangle, transform)` | rectangle: Rectangle, transform: Transform | Rectangle |
| `getTypeBaseType(type)` | type: ShapeType | ShapeType |
| `getTypeDisplayName(type)` | type: ShapeType | String |
| `isAffectedByScale()` | — | Boolean |

## ShapeArrowApi

> Модуль `affinity:geometry` · методов: 22 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeArrowApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeArrowHandle |
| `cloneAsShapeArrow()` | — | ShapeArrowHandle |
| `create()` | — | ShapeArrowHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeArrowHandle |
| `getLeftEndStyle()` | — | ShapeArrowEndStyle |
| `getLeftInnerOffset()` | — | Number |
| `getLeftIsProportional()` | — | Boolean |
| `getLeftLength()` | — | Number |
| `getRightEndStyle()` | — | ShapeArrowEndStyle |
| `getRightInnerOffset()` | — | Number |
| `getRightIsProportional()` | — | Boolean |
| `getRightLength()` | — | Number |
| `getThickness()` | — | Number |
| `setLeftEndStyle(endStyle)` | endStyle: ShapeArrowEndStyle | — |
| `setLeftInnerOffset(innerOffset, width, height)` | innerOffset: Number, width: Number, height: Number | — |
| `setLeftIsProportional(proportional, width, height)` | proportional: Boolean, width: Number, height: Number | — |
| `setLeftLength(length, width, height)` | length: Number, width: Number, height: Number | — |
| `setRightEndStyle(endStyle)` | endStyle: ShapeArrowEndStyle | — |
| `setRightInnerOffset(innerOffset, width, height)` | innerOffset: Number, width: Number, height: Number | — |
| `setRightIsProportional(proportional, width, height)` | proportional: Boolean, width: Number, height: Number | — |
| `setRightLength(length, width, height)` | length: Number, width: Number, height: Number | — |
| `setThickness(thickness)` | thickness: Number | — |

## ShapeCalloutEllipseApi

> Модуль `affinity:geometry` · методов: 12 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCalloutEllipseApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCalloutEllipseHandle |
| `cloneAsShapeCalloutEllipse()` | — | ShapeCalloutEllipseHandle |
| `create()` | — | ShapeCalloutEllipseHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCalloutEllipseHandle |
| `getAbsoluteSizes()` | — | Boolean |
| `getTailAngle()` | — | Number |
| `getTailEndPosition()` | — | Number |
| `getTailHeight()` | — | Number |
| `setAbsoluteSizes(absoluteSizes, width, height)` | absoluteSizes: Boolean, width: Number, height: Number | — |
| `setTailAngle(tailAngle)` | tailAngle: Number | — |
| `setTailEndPosition(tailEndPosition)` | tailEndPosition: Number | — |
| `setTailHeight(tailHeight)` | tailHeight: Number | — |

## ShapeCalloutRectangleApi

> Модуль `affinity:geometry` · методов: 18 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCalloutRectangleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCalloutRectangleHandle |
| `cloneAsShapeCalloutRectangle()` | — | ShapeCalloutRectangleHandle |
| `create()` | — | ShapeCalloutRectangleHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCalloutRectangleHandle |
| `getAbsoluteSizes()` | — | Boolean |
| `getCornerRadius(index)` | index: ShapeCornerIndex | Number |
| `getTailEndPosition()` | — | Number |
| `getTailHeight()` | — | Number |
| `getTailPosition()` | — | Number |
| `getTailWidth()` | — | Number |
| `getUseSingleRadius()` | — | Boolean |
| `setAbsoluteSizes(absoluteSizes, width, height)` | absoluteSizes: Boolean, width: Number, height: Number | — |
| `setCornerRadius(index, cornerRadius, width, height)` | index: ShapeCornerIndex, cornerRadius: Number, width: Number, height: Number | — |
| `setTailEndPosition(tailEndPosition)` | tailEndPosition: Number | — |
| `setTailHeight(tailHeight)` | tailHeight: Number | — |
| `setTailPosition(tailPosition)` | tailPosition: Number | — |
| `setTailWidth(tailWidth)` | tailWidth: Number | — |
| `setUseSingleRadius(useSingleRadius)` | useSingleRadius: Boolean | — |

## ShapeCat2Api

> Модуль `affinity:geometry` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCat2Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCat2Handle |
| `cloneAsShapeCat2()` | — | ShapeCat2Handle |
| `create()` | — | ShapeCat2Handle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCat2Handle |

## ShapeCat3Api

> Модуль `affinity:geometry` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCat3Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCat3Handle |
| `cloneAsShapeCat3()` | — | ShapeCat3Handle |
| `create()` | — | ShapeCat3Handle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCat3Handle |

## ShapeCat4Api

> Модуль `affinity:geometry` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCat4Api/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCat4Handle |
| `cloneAsShapeCat4()` | — | ShapeCat4Handle |
| `create()` | — | ShapeCat4Handle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCat4Handle |

## ShapeCatApi

> Модуль `affinity:geometry` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCatApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCatHandle |
| `cloneAsShapeCat()` | — | ShapeCatHandle |
| `create()` | — | ShapeCatHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCatHandle |

## ShapeCloudApi

> Модуль `affinity:geometry` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCloudApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCloudHandle |
| `cloneAsShapeCloud()` | — | ShapeCloudHandle |
| `create()` | — | ShapeCloudHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCloudHandle |
| `getBubbleCount()` | — | Number |
| `getInnerRadius()` | — | Number |
| `setBubbleCount(bubbleCount)` | bubbleCount: Number | — |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |

## ShapeCogApi

> Модуль `affinity:geometry` · методов: 16 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCogApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCogHandle |
| `cloneAsShapeCog()` | — | ShapeCogHandle |
| `create()` | — | ShapeCogHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCogHandle |
| `getCurvature()` | — | Number |
| `getHoleRadius()` | — | Number |
| `getInnerRadius()` | — | Number |
| `getNotchSize()` | — | Number |
| `getToothCount()` | — | Number |
| `getToothSize()` | — | Number |
| `setCurvature(curvature)` | curvature: Number | — |
| `setHoleRadius(holeRadius)` | holeRadius: Number | — |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setNotchSize(notchSize)` | notchSize: Number | — |
| `setToothCount(toothCount)` | toothCount: Number | — |
| `setToothSize(toothSize)` | toothSize: Number | — |

## ShapeCrescentApi

> Модуль `affinity:geometry` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeCrescentApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeCrescentHandle |
| `cloneAsShapeCrescent()` | — | ShapeCrescentHandle |
| `create()` | — | ShapeCrescentHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeCrescentHandle |
| `getArcLeft()` | — | Number |
| `getArcRight()` | — | Number |
| `setArcLeft(arcLeft)` | arcLeft: Number | — |
| `setArcRight(arcRight)` | arcRight: Number | — |

## ShapeDiamondApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeDiamondApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeDiamondHandle |
| `cloneAsShapeDiamond()` | — | ShapeDiamondHandle |
| `create()` | — | ShapeDiamondHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeDiamondHandle |
| `getPosition()` | — | Number |
| `setPosition(position)` | position: Number | — |

## ShapeDoubleStarApi

> Модуль `affinity:geometry` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeDoubleStarApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeDoubleStarHandle |
| `cloneAsShapeDoubleStar()` | — | ShapeDoubleStarHandle |
| `create()` | — | ShapeDoubleStarHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeDoubleStarHandle |
| `getInnerRadius()` | — | Number |
| `getPointCount()` | — | Number |
| `getPointRadius()` | — | Number |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setPointCount(pointCount)` | pointCount: Number | — |
| `setPointRadius(pointRadius)` | pointRadius: Number | — |

## ShapeEllipseApi

> Модуль `affinity:geometry` · методов: 4 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeEllipseApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeEllipseHandle |
| `cloneAsShapeEllipse()` | — | ShapeEllipseHandle |
| `create()` | — | ShapeEllipseHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeEllipseHandle |

## ShapeHeartApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeHeartApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeHeartHandle |
| `cloneAsShapeHeart()` | — | ShapeHeartHandle |
| `create()` | — | ShapeHeartHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeHeartHandle |
| `getSpread()` | — | Number |
| `setSpread(spread)` | spread: Number | — |

## ShapePieApi

> Модуль `affinity:geometry` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapePieApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapePieHandle |
| `cloneAsShapePie()` | — | ShapePieHandle |
| `closePie()` | — | — |
| `create()` | — | ShapePieHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapePieHandle |
| `getEndAngle()` | — | Number |
| `getInnerRadius()` | — | Number |
| `getIsClosed()` | — | Boolean |
| `getStartAngle()` | — | Number |
| `getSweep()` | — | Number |
| `setEndAngle(endAngle)` | endAngle: Number | — |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setStartAngle(startAngle)` | startAngle: Number | — |
| `setSweep(sweep)` | sweep: Number | — |

## ShapePolygonApi

> Модуль `affinity:geometry` · методов: 11 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapePolygonApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapePolygonHandle |
| `cloneAsShapePolygon()` | — | ShapePolygonHandle |
| `create()` | — | ShapePolygonHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapePolygonHandle |
| `getCurve()` | — | Number |
| `getMinCurve()` | — | Number |
| `getSideCount()` | — | Number |
| `getSmoothPoints()` | — | Boolean |
| `setCurve(curve)` | curve: Number | — |
| `setSideCount(numSides)` | numSides: Number | — |
| `setSmoothPoints(smoothPoints)` | smoothPoints: Boolean | — |

## ShapeQRCodeApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeQRCodeApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeQRCodeHandle |
| `cloneAsShapeQRCode()` | — | ShapeQRCodeHandle |
| `create()` | — | ShapeQRCodeHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeQRCodeHandle |
| `getPayload()` | — | QRPayloadHandle |
| `setPayload(payload)` | payload: QRPayloadHandle | — |

## ShapeRectangleApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeRectangleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeRectangleHandle |
| `cloneAsShapeRectangle()` | — | ShapeRectangleHandle |
| `create()` | — | ShapeRectangleHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeRectangleHandle |
| `getAbsoluteSizes()` | — | Boolean |
| `getCornerRadius(corner)` | corner: ShapeCornerIndex | Number |
| `getCornerType(corner)` | corner: ShapeCornerIndex | ShapeCornerType |
| `getUseSingleRadius()` | — | Boolean |
| `isPlainRectangle()` | — | Boolean |
| `setAbsoluteSizes(absoluteSizes, width, height)` | absoluteSizes: Boolean, width: Number, height: Number | — |
| `setCornerRadius(corner, cornerRadius, width, height)` | corner: ShapeCornerIndex, cornerRadius: Number, width: Number, height: Number | — |
| `setCornerType(corner, cornerType)` | corner: ShapeCornerIndex, cornerType: ShapeCornerType | — |
| `setUseSingleRadius(singleRadius)` | singleRadius: Boolean | — |

## ShapeSegmentApi

> Модуль `affinity:geometry` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeSegmentApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeSegmentHandle |
| `cloneAsShapeSegment()` | — | ShapeSegmentHandle |
| `create()` | — | ShapeSegmentHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeSegmentHandle |
| `getAngle()` | — | Number |
| `getLowerLine()` | — | Number |
| `getUpperLine()` | — | Number |
| `setAngle(angle)` | angle: Number | — |
| `setLowerLine(lowerLine)` | lowerLine: Number | — |
| `setUpperLine(upperLine)` | upperLine: Number | — |

## ShapeSpiralApi

> Модуль `affinity:geometry` · методов: 30 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeSpiralApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeSpiralHandle |
| `cloneAsShapeSpiral()` | — | ShapeSpiralHandle |
| `create()` | — | ShapeSpiralHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeSpiralHandle |
| `getBias()` | — | Number |
| `getCapChoke()` | — | Boolean |
| `getChoke()` | — | Number |
| `getCusped()` | — | Boolean |
| `getDecay()` | — | Number |
| `getDecayPerSegment()` | — | Boolean |
| `getDivisions()` | — | Number |
| `getFlip()` | — | Boolean |
| `getInnerRadius()` | — | Number |
| `getPartTurn()` | — | Number |
| `getSegmentAngle()` | — | Number |
| `getStyle()` | — | ShapeSpiralStyle |
| `getTurns()` | — | Number |
| `setBias(bias)` | bias: Number | — |
| `setCapChoke(capChoke)` | capChoke: Boolean | — |
| `setChoke(choke)` | choke: Number | — |
| `setCusped(cusped)` | cusped: Boolean | — |
| `setDecay(decay)` | decay: Number | — |
| `setDecayPerSegment(decayPerSegment)` | decayPerSegment: Boolean | — |
| `setDivisions(divisions)` | divisions: Number | — |
| `setFlip(flip)` | flip: Boolean | — |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setPartTurn(partTurn)` | partTurn: Number | — |
| `setSegmentAngle(segmentAngle)` | segmentAngle: Number | — |
| `setStyle(style)` | style: ShapeSpiralStyle | — |
| `setTurns(turns)` | turns: Number | — |

## ShapeSquareStarApi

> Модуль `affinity:geometry` · методов: 8 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeSquareStarApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeSquareStarHandle |
| `cloneAsShapeSquareStar()` | — | ShapeSquareStarHandle |
| `create()` | — | ShapeSquareStarHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeSquareStarHandle |
| `getCutout()` | — | Number |
| `getSideCount()` | — | Number |
| `setCutout(cutout)` | cutout: Number | — |
| `setSideCount(sideCount)` | sideCount: Number | — |

## ShapeStarApi

> Модуль `affinity:geometry` · методов: 19 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeStarApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeStarHandle |
| `cloneAsShapeStar()` | — | ShapeStarHandle |
| `create()` | — | ShapeStarHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeStarHandle |
| `getCircleInnerRadius()` | — | Number |
| `getCircleOuterRadius()` | — | Number |
| `getCurvedEdges()` | — | Boolean |
| `getInnerRadius()` | — | Number |
| `getLeftCurve()` | — | Number |
| `getMaxCircleInnerRadius()` | — | Number |
| `getPointCount()` | — | Number |
| `getRightCurve()` | — | Number |
| `setCircleInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setCircleOuterRadius(outerRadius)` | outerRadius: Number | — |
| `setCurvedEdges(curvedEdges)` | curvedEdges: Boolean | — |
| `setInnerRadius(innerRadius)` | innerRadius: Number | — |
| `setLeftCurve(leftCurve)` | leftCurve: Number | — |
| `setPointCount(pointCount)` | pointCount: Number | — |
| `setRightCurve(rightCurve)` | rightCurve: Number | — |

## ShapeTearApi

> Модуль `affinity:geometry` · методов: 14 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeTearApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeTearHandle |
| `cloneAsShapeTear()` | — | ShapeTearHandle |
| `create()` | — | ShapeTearHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeTearHandle |
| `getBallSize()` | — | Number |
| `getBend()` | — | Number |
| `getCurve()` | — | Number |
| `getFixedBallSize()` | — | Boolean |
| `getTailPosition()` | — | Number |
| `setBallSize(ballSize)` | ballSize: Number | — |
| `setBend(bend)` | bend: Number | — |
| `setCurve(curve)` | curve: Number | — |
| `setFixedBallSize(fixedBallSize)` | fixedBallSize: Boolean | — |
| `setTailPosition(tailPosition)` | tailPosition: Number | — |

## ShapeTrapezoidApi

> Модуль `affinity:geometry` · методов: 10 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeTrapezoidApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeTrapezoidHandle |
| `cloneAsShapeTrapezoid()` | — | ShapeTrapezoidHandle |
| `create()` | — | ShapeTrapezoidHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeTrapezoidHandle |
| `getLeftPosition()` | — | Number |
| `getPositions()` | — | ShapeTrapezoidPositions |
| `getRightPosition()` | — | Number |
| `setLeftPosition(leftPosition)` | leftPosition: Number | — |
| `setPositions(leftPosition, rightPosition)` | leftPosition: Number, rightPosition: Number | — |
| `setRightPosition(rightPosition)` | rightPosition: Number | — |

## ShapeTriangleApi

> Модуль `affinity:geometry` · методов: 6 · [SDK](https://sdk.affinity.studio/33000/js/apis/ShapeTriangleApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clone()` | — | ShapeTriangleHandle |
| `cloneAsShapeTriangle()` | — | ShapeTriangleHandle |
| `create()` | — | ShapeTriangleHandle |
| `fromShape(shape)` | shape: ShapeHandle | ShapeTriangleHandle |
| `getPosition()` | — | Number |
| `setPosition(position)` | position: Number | — |

## SplineApi

> Модуль `affinity:geometry` · методов: 13 · [SDK](https://sdk.affinity.studio/33000/js/apis/SplineApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `clear()` | — | — |
| `clone()` | — | SplineHandle |
| `create()` | — | SplineHandle |
| `createFromPoints(points)` | points: Point[] | SplineHandle |
| `createFromProfile(profile)` | profile: SplineProfile | SplineHandle |
| `findPoint(point)` | point: Point | SplineFindPointResult |
| `getPoint(index)` | index: Number | Point |
| `getPointCount()` | — | Number |
| `insertPoint(point)` | point: Point | — |
| `isLinear()` | — | Boolean |
| `removePoint(index)` | index: Number | — |
| `replaceOrInsertPoint(point)` | point: Point | — |
| `setIsLinear(isLinear)` | isLinear: Boolean | — |

## TransformApi

> Модуль `affinity:geometry` · методов: 15 · [SDK](https://sdk.affinity.studio/33000/js/apis/TransformApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `add(left, right, result)` | left: Transform, right: Transform, result: Transform | — |
| `applyToPoint(point)` | point: Point | Point |
| `applyToVector(vector)` | vector: Vector | Vector |
| `assign(source)` | source: Transform | — |
| `compose(data)` | data: TransformData | — |
| `decompose()` | — | TransformData |
| `invert()` | — | — |
| `inverted()` | — | Transform |
| `multiply(left, right, result)` | left: Transform, right: Transform, result: Transform | — |
| `rotate(rads)` | rads: Number | — |
| `scale(x, y)` | x: Number, y: Number | — |
| `setIdentity()` | — | — |
| `shear(x, y)` | x: Number, y: Number | — |
| `subtract(left, right, result)` | left: Transform, right: Transform, result: Transform | — |
| `translate(x, y)` | x: Number, y: Number | — |

## VectorApi

> Модуль `affinity:geometry` · методов: 20 · [SDK](https://sdk.affinity.studio/33000/js/apis/VectorApi/index.html)

| Метод | Аргументы | Возврат |
|---|---|---|
| `absEq()` | — | — |
| `add(vector, other)` | vector: Vector, other: Vector | Vector |
| `assign(other)` | other: Vector | — |
| `cross(vector, other)` | vector: Vector, other: Vector | Number |
| `dot(vector, other)` | vector: Vector, other: Vector | Number |
| `getAbs(vector)` | vector: Vector | Vector |
| `getAngle(vector)` | vector: Vector | Number |
| `getAngleDeg(vector)` | vector: Vector | Number |
| `getNeg(vector)` | vector: Vector | Vector |
| `getSpangle(vector)` | vector: Vector | Number |
| `length(vector)` | vector: Vector | Number |
| `lengthSquared(vector)` | vector: Vector | Number |
| `makeZero()` | — | — |
| `negEq()` | — | — |
| `normalise(vector)` | vector: Vector | Vector |
| `reverse(vector)` | vector: Vector | Vector |
| `rotate(vector, rads)` | vector: Vector, rads: Number | Vector |
| `scale(vector, scale)` | vector: Vector, scale: Number | Vector |
| `subtract(vector, other)` | vector: Vector, other: Vector | Vector |
| `transform(vector, transform)` | vector: Vector, transform: Transform | Vector |


## Примеры (JSLib)

> Запускаемые примеры из SDK: `docs/JSLib/examples/`.

- `addGuides.js`
- `addPoints.js`
- `adjustPageItems.js`
- `artboardGrid.js`
- `bulgeVersinePlayground.js`
- `bulgedPolyline.js`
- `cornerEffects.js`
- `cropMarks.js`
- `divideLength.js`
- `makeGrid.js`
- `opticalBackward.js`
- `opticalForward.js`
- `pathEffects.js`
- `randomise.js`
- `roundAnyCorner.js`
- `selectObjects.js`
- `stepAndRepeat.js`
- `swapObjects.js`
