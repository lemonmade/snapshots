import React from 'react';
import Snapshot from 'react-snapshots';
import Badge from './Badge';

export default function BadgeSnapshotTest() {
  return (
    <Snapshot component={Badge}>
      <Snapshot name="base">
        <Badge>Badge</Badge>
      </Snapshot>

      <Snapshot name="success">
        <Badge status="success">Badge</Badge>
      </Snapshot>

      <Snapshot name="subdued">
        <Badge status="subdued">Badge</Badge>
      </Snapshot>

      <Snapshot name="info">
        <Badge status="info">Badge</Badge>
      </Snapshot>

      <Snapshot name="attention">
        <Badge status="attention">Badge</Badge>
      </Snapshot>

      <Snapshot name="warning">
        <Badge status="warning">Badge</Badge>
      </Snapshot>

      <Snapshot name="critical">
        <Badge status="critical">Badge</Badge>
      </Snapshot>
    </Snapshot>
  );
}
