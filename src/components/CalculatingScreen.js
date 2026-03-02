import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors, spacing, fontFamily, borderRadius } from '../constants/theme';
import useReducedMotion from '../hooks/useReducedMotion';

const MESSAGES = [
  'Calculating your maternity pay...',
  'Applying NHS pay rates...',
  'Working out tax & deductions...',
  'Preparing your breakdown...',
];

const MESSAGE_INTERVAL = 800;
const TOTAL_DURATION = 2500;

export default function CalculatingScreen({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);

  // Ring animations
  const ring1Scale = useRef(new Animated.Value(0.8)).current;
  const ring1Opacity = useRef(new Animated.Value(0.3)).current;
  const ring2Scale = useRef(new Animated.Value(0.8)).current;
  const ring2Opacity = useRef(new Animated.Value(0.3)).current;
  const ring3Scale = useRef(new Animated.Value(0.8)).current;
  const ring3Opacity = useRef(new Animated.Value(0.3)).current;

  // Message fade
  const messageFade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Auto-complete after total duration
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, TOTAL_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, MESSAGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Message fade animation on index change
  useEffect(() => {
    if (prefersReducedMotion) {
      messageFade.setValue(1);
      return;
    }
    messageFade.setValue(0);
    Animated.timing(messageFade, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [messageIndex, prefersReducedMotion]);

  // Ring pulse animations
  useEffect(() => {
    if (prefersReducedMotion) {
      ring1Scale.setValue(1);
      ring1Opacity.setValue(0.5);
      ring2Scale.setValue(1);
      ring2Opacity.setValue(0.4);
      ring3Scale.setValue(1);
      ring3Opacity.setValue(0.3);
      return;
    }

    const createPulse = (scaleAnim, opacityAnim, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.parallel([
            Animated.sequence([
              Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 1000,
                useNativeDriver: true,
              }),
              Animated.timing(scaleAnim, {
                toValue: 0.8,
                duration: 1000,
                useNativeDriver: true,
              }),
            ]),
            Animated.sequence([
              Animated.timing(opacityAnim, {
                toValue: 0.8,
                duration: 1000,
                useNativeDriver: true,
              }),
              Animated.timing(opacityAnim, {
                toValue: 0.3,
                duration: 1000,
                useNativeDriver: true,
              }),
            ]),
          ]),
        ])
      );
    };

    const anim1 = createPulse(ring1Scale, ring1Opacity, 0);
    const anim2 = createPulse(ring2Scale, ring2Opacity, 200);
    const anim3 = createPulse(ring3Scale, ring3Opacity, 400);

    anim1.start();
    anim2.start();
    anim3.start();

    return () => {
      anim1.stop();
      anim2.stop();
      anim3.stop();
    };
  }, [prefersReducedMotion]);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        {/* Ring 3 (outermost) */}
        <Animated.View
          style={[
            styles.ring,
            styles.ring3,
            {
              transform: [{ scale: ring3Scale }],
              opacity: ring3Opacity,
            },
          ]}
        />
        {/* Ring 2 (middle) */}
        <Animated.View
          style={[
            styles.ring,
            styles.ring2,
            {
              transform: [{ scale: ring2Scale }],
              opacity: ring2Opacity,
            },
          ]}
        />
        {/* Ring 1 (innermost) */}
        <Animated.View
          style={[
            styles.ring,
            styles.ring1,
            {
              transform: [{ scale: ring1Scale }],
              opacity: ring1Opacity,
            },
          ]}
        />
        {/* Center dot */}
        <View style={styles.centerDot} />
      </View>

      <Animated.Text style={[styles.message, { opacity: messageFade }]}>
        {MESSAGES[messageIndex]}
      </Animated.Text>
    </View>
  );
}

const RING_SIZE = 160;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl * 2,
    minHeight: 360,
  },
  animationContainer: {
    width: RING_SIZE,
    height: RING_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
  },
  ring1: {
    width: RING_SIZE * 0.5,
    height: RING_SIZE * 0.5,
    backgroundColor: colors.primaryLight,
  },
  ring2: {
    width: RING_SIZE * 0.75,
    height: RING_SIZE * 0.75,
    backgroundColor: colors.primarySurface,
  },
  ring3: {
    width: RING_SIZE,
    height: RING_SIZE,
    backgroundColor: colors.sageLight,
  },
  centerDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  message: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
